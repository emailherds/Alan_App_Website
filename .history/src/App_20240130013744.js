import './App.css';
import navbar from './components/navbar';
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
