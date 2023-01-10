import axios from "axios";
import { GET_POSTS } from "./post.types";

export const getPosts=()=>async(dispatch)=>{
  let response=await axios.get("http://localhost:8080/posts");
  return dispatch({type:GET_POSTS,payload:response.data})
}



