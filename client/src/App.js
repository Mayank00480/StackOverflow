
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router,
         } from 'react-router-dom'
import AllRoutes from './components/AllRoutes';
 
 

 
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <AllRoutes />
    </div>
    </Router>
  );
}

export default App;
