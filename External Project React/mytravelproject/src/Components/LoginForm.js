import React, { useReducer } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./LoginFormStyle.css"
const initialState = {
    email: "",
    password: "",
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "email":
        return { ...state, email: action.payload };
      case "password":
        return { ...state, password: action.payload };
      case "reset":
        return initialState;
      default:
        return state;
    }
  };
const LoginForm = () => {
    const history = useNavigate();

const [state, dispatch] = useReducer(reducer, initialState);


  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = state;

    const getuserArr = JSON.parse(localStorage.getItem("userData"));

    console.log(getuserArr);

    if (email === "") {
      alert("EMAIL field required");
    } else if (!email.includes("@")) {
      alert("Please enter valid EMAIL address");
    } else if (password === "") {
      alert("PASSWORD field required");
    } else if (password.length < 5) {
      alert("Please enter PASSWORD more than 5 characters");
    } else {
      if (getuserArr && getuserArr.length) {
       
        const userLogin = getuserArr.filter((el) => {
          return el.email === email && el.password === password;
        });
        console.log(userLogin);
        if (userLogin.length === 0) {
          alert("Invalid Details");
        } else {
          console.log("done");
          dispatch({ type: "reset" });
          localStorage.setItem("user_login", JSON.stringify(...userLogin));
          history("/");
        }
      }
    }
  };
  return (
    <div className="form-container">
            <div className="logo-container">
            <h1 className="site-logo">Trippy</h1>
            </div>
            <h1 className='header'>Sign In</h1>
            <form >
                <label>Email</label>
                <input type="email" 
                value={state.email}
                onChange={(e) =>
                  dispatch({ type: "email", payload: e.target.value })
                }
                name="email" placeholder="Email"/>
                <label>Password</label>
                <input type="password"
                 name="password"
                  placeholder="Password"
                  value={state.password}
                      onChange={(e) =>
                        dispatch({ type: "password", payload: e.target.value })
                      }
                    />
                 <button onClick={handleSubmit}>Log in</button>
                 <div className='bottom-text'>
                 <Link>Forgot your password?</Link>
                 <p id="signup_link">Don't have an account? <span><Link to="/signup">Sign up</Link></span></p>
                 </div>
                 
                </form>
        </div>
  )
}

export default LoginForm;