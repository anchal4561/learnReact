
import './App.css';

//consume here
import {useContext} from "react"
import {AppContext} from "./Context/AppContextProvider"
const style={
  light:{
    color:"black",
    background:"#cecece",
    padding:"50px"

  },
  dark:{
    color:"white",
    background:"black",
    padding:"50px"

  }
}
function App() {
  
  //consume through useCOntext help us to consume data here
  const {theme,toggleTheme}=useContext(AppContext)
  return (
    <div className="App" 
    style={theme==="dark"?style.dark:style.light}>
     <h1>Theme is {theme}</h1>
      <h1>COntext </h1>
      <button  style={theme==="dark"?{background:'white',color:'black',border:"none",padding:"5px"}
       :{background:'pink',color:'black',border:"none",padding:"5px"}} onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}

export default App;
