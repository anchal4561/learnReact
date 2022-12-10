import React, { useState, useEffect} from "react";
import { Box, TextField, Button, styled, Typography } from "@mui/material";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../auth/Authcontext";
import {useNavigate} from "react-router-dom"




const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`;
const Image = styled("img")({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 16px;
`;

const signupinitialValue = {
  name: "",
  email: "",
  password: "",
  age: "",
};
const Login = () => {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  const [account, toggleAccount] = useState("login");
  const [signup, setSignup] = useState(signupinitialValue);
  const navigate= useNavigate()
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });


  const userLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };


  const signupUser = async () => {
    try {
      const res = await axios
        .post("http://localhost:8080/signup", signup)
        .then((res) => {
          console.log(res.data);
          alert(res.data)
        }).then(()=>{
          navigate("/verifysignup")
        })
        .then(() => {
          toggleSignup();
        })
        .catch(function (error) {
          console.log(error.response.data);
          alert(error.response.data.message);
        });
    } catch (e) {
      console.log(e);
    }
  };



  const LoginUser = async () => {
    try {
      const res = await axios
        .post("http://localhost:8080/login", login)
        .then((res) => {
          localStorage.setItem("token",JSON.stringify([res.data.token,res.data.refreshToken]))
          
          console.log(res.data.token);
          
          toggleAuth()
          alert(res.data.message);
          if(isAuth){
            navigate("/")
          }
    
        })
        .catch(function (error) {
          console.log(error.response.data);
          alert(error.response.data);
        });
    } catch (e) {
      console.log(e);
    }
  };

  

  useEffect(()=>{
    if(isAuth){
     navigate('/')
      }
    },[navigate,isAuth])




  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="login" />

        {account === "login" ? (
          <Wrapper>
            <TextField
              variant="standard"
              onChange={(e) => userLogin(e)}
              name="email"
              label="Enter email"
              required
            />
            <TextField
              variant="standard"
              onChange={(e) => userLogin(e)}
              name="password"
              label="Enter password"
              required
            />
            <LoginButton variant="contained" onClick={() => LoginUser()}>
              Login
            </LoginButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <SignupButton onClick={() => toggleSignup()}>
              Create an account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="name"
              label="Enter Name"
              required
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="email"
              label="Enter Email"
              required
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="password"
              label="Enter password"
              required
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="age"
              label="Enter Age"
              required
            />
            <SignupButton onClick={() => signupUser()}>Signup</SignupButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <LoginButton onClick={() => toggleSignup()} variant="contained">
              Already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
