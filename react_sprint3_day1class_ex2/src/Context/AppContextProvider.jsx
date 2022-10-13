import React from "react"
  export const AppContext= React.createContext();

 const AppContextProvider=({children})=>{
    const [isAuth,setIsAuth]=React.useState(false)
    const [token,setToken]=React.useState("abcdef")

    const handleLogin=(username)=>{
        setIsAuth(true);
        setToken(Date.now()+username);

    }

const value={isAuth,token,handleLogin};
return <AppContext.Provider value={value}>{children}</AppContext.Provider>

 }

 export default AppContextProvider;