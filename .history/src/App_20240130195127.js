import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Features from './components/pages/Features'
import Reviews from './components/pages/Reviews';

function App() {
  return (
    <>        
      <Router>
      <Navbar/>
      <Routes>
        <Route path = '/' exact element = {<Home/>}/>
        <Route path = '/about' exact element = {<About/>}/>
        <Route path = '/features' exact element = {<Features/>}/>
        <Route path = '/reviews' exact element = {<Reviews/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
