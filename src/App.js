import './App.css';

import SideNav from './components/sideNav/sideNav';
import { BrowserRouter as Router} from 'react-router-dom';

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
