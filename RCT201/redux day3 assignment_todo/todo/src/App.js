import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom"
import AllRoutes from './router/AllRoutes';


function App() {
  return (
    <div className="App">
      <Link to= "/">Home</Link>
      <AllRoutes/>      
          </div>
  );
}

export default App;
