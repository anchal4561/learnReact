
import './App.css';
import Navbar  from './Components/Navbar';
import AllRoutes from './Pages/AllRoutes';


//use link instead of anchor tag bcz anchor willl load page
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      
    </div>
  );
}

export default App;
