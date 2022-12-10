import './App.css';
import ResponsiveAppBar from './components/Navbar/Navbar';
// import Login from './components/account/Login';
import Router from './components/route/Router';

function App() {
  return (
    <div >
    {/* <Login/> */}
    <ResponsiveAppBar/>
    <Router/>
    </div>
  );
}

export default App;
