import axios from "axios";
import React from "react"
import { LOGIN_ERROR,LOGIN_REQUEST,LOGIN_SUCCESS,LOGOUT } from "./auth.types";

export const login=(creds)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try{
        let response=await axios.post("https://reqres.in/api/login",creds);
    dispatch({type:LOGIN_SUCCESS,payload:response.data})
    return response.data


    }
    catch(e){
        dispatch({type:LOGIN_ERROR,payload:e.message})
    }
}
///////hdjkwgiy

export const logout=()=>({type:LOGOUT})