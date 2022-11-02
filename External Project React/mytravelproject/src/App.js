
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './Routes/Home';
import About from './Routes/About';
import Service from './Routes/Service';
import Contact from './Routes/Contact';
import Signup from './Routes/Signup';
import Login from './Routes/Login';
function App() {
  return (
    <div className="App">
     
      <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/service" element={<Service/>}></Route>

    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    {/* <Route path="/login" element={<Login/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
