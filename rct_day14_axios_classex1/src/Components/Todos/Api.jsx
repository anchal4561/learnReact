import axios from "axios"

export const getTodos =()=>{
    return axios.get(`http://localhost:3000/todos`)

}