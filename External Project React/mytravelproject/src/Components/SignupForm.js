import React, { useReducer } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./SignupStyle.css"

const initialState = {
    name: "",
    email: "",
    password: "",
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "name":
        return { ...state, name: action.payload };
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
const SignupForm = () => {
    const data = JSON.parse(localStorage.getItem("userData"))||[]
    console.log(data);
    const history= useNavigate()

 const [state, dispatch] = useReducer(reducer, initialState);

 const handleSubmit = (e) => {
    e.preventDefault();

 const { name, email, password} = state;
    if (email === "") {
      alert("EMAIL field required");
    }
    else if (!email.includes("@")) {
        alert("Please enter valid EMAIL address");
      } else if (name === "") {
        alert("Name field required");
      } else if (password === "") {
        alert("Password field required");
      } else if (password.length < 5) {
        alert("Please enter password more than 5 characters");
      } else {
        console.log("done");
        data.push(state);
        dispatch({ type: "reset" });
        localStorage.setItem("userData", JSON.stringify(data));
        history("/login");
      }
    }
    console.log(state)

  return (
    <div className="form-container">
            <div className="logo-container">
            <h1 className="site-logo">Trippy</h1>
            </div>
            <h1 className='header'>Create Your Account</h1>
            <form >
                <label>Name</label>
                <input type="text" name="name"
                value={state.name} 
                placeholder="Name"
                onChange={(e)=>
                    dispatch({ type: "name", payload: e.target.value })
                    }
                    />
                <label>Email</label>
                <input type="email"
                 name="email"
                 value={state.email}
                 onChange={(e) =>
                        dispatch({ type: "email", payload: e.target.value })
                      }
                 placeholder="Email"/>
                <label>Password</label>
                <input type="password"
                value={state.password}
                onChange={(e) =>
                  dispatch({ type: "password", payload: e.target.value })
                }
                 name="password" placeholder="Password"/>
                 <button onClick={handleSubmit}>SIGN UP</button>
                 <p id="login_link">Already have an account? <span><Link to="/login">Log in</Link></span></p>
                    <p>By creating your account, you agree to the <span><a href="">Terms of Service</a></span> and <span><a href="">Privacy Policy</a></span></p>
            </form>
        </div>
  )
}

export default SignupForm;