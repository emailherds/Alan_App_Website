import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Features from './components/pages/Features'
import Reviews from './components/pages/Reviews';
import CreateReview from './components/pages/CreateReview';

function App() {
  return (
    <>        
      <Navbar/>
      <Routes>
        <Route path = '/' exact element = {<Home/>}/>
        <Route path = '/about' exact element = {<About/>}/>
        <Route path = '/features' exact element = {<Features/>}/>
        <Route path = '/reviews' exact element = {<Reviews/>}/>
        <Route path = '/reviews/create' exact element = {<CreateReview/>}/>
      </Routes>
    </>
  );
}

export default App;
