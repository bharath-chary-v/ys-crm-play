import './App.css';
import CityDashBoard from './components/city/cityDashBoard';
import SideNav from './components/sideNav/sideNav';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className="App">
        <SideNav />
      </div>
    </Router>

    
  );
}

export default App;
