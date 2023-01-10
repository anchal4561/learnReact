import axios from "axios";
import { GET_FEEDS } from "./feed.types";

export const getFeeds=()=>async(dispatch)=>{
  let response=await axios.get("http://localhost:8080/feeds");
  return dispatch({type:GET_FEEDS,payload:response.data})
}



