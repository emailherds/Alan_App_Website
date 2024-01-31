import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Features from './components/pages/Features'

function App() {
  return (
    <>        
      <Router>
      <Navbar/>
      <Routes>
        <Route path = '/' exact element = {<Home/>}/>
        <Route path = '/features' exact element = {<Features/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
