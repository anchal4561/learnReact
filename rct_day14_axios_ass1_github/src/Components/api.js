import axios from "axios"

export const getData=(query,page)=>{

    return axios.get(`http://api.github.com/search/users?q=${query}&sort=stars&order=asc&page=${page}&per_page=12`)
}
