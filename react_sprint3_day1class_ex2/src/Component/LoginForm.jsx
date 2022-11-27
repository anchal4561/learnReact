import React from "react"
import {AppContext} from "../Context/AppContextProvider"
import Form from "./Form"
 function LoginForm(){
    const {handleLogin}=React.useContext(AppContext)
    const [username,setUsername]=React.useState("");

    const onSubmit=(e)=>{
        e.preventDefault();
        handleLogin(username)
    }

    return(
        <Form onSubmit={onSubmit} title="LOGIN">
            <input 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder="name"
            />
        </Form>
    )

}
export default LoginForm;