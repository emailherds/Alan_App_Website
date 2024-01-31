import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routers, Route} from 'react-router-dom';

function App() {
  return (
    <>        
      <Router>
      <navbar/>
      <Routers>
        <Route path = '/' exact/>
      </Routers>
      </Router>
    </>
  );
}

export default App;
