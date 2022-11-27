import React from "react"
export const AuthContext=React.createContext();
function AuthContextProvider ({children}){

    const [isAuth, setIsAuth] = React.useState("false");
    const toggleAuth =()=>{
      if(isAuth==="false"){
        setIsAuth("true")
      }
         else{
            setIsAuth("false")
         } 
    }

    return (
        <AuthContext.Provider value={{ isAuth, toggleAuth }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;