
import React from "react"
import {AppContext} from "../Context/AppContextProvider"
const Status=()=>{
    const {isAuth,token}=React.useContext(AppContext)
    return <div>{isAuth? `token is ${token}`:`user has not logged in`}</div>

}
export default Status;