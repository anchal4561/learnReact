import React from "react"

export const AppContext=React.createContext();
//step1-create COntext
//import createContext
//use


//step2(a)-provide substep-1
//create custom provider componnet

//AppContext.Provider;->Component
//Application inside provider
//creatre custom Component which woud rety=urn
// children refer here to app component
function AppContextProvider({children}){
  //props.children


  const [theme,setTheme]=React.useState("dark")
  const toggleTheme=()=>{
    setTheme(theme==="light"?"dark":"light")
  }
    return <AppContext.Provider
    value={{theme:theme,toggleTheme:toggleTheme}}
    >{children}</AppContext.Provider>
}

export default AppContextProvider