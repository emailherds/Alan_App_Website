import './App.css';
import navbar from './components/navbar';
import { BrowserRouter as Router, Routers, Route} from 'react-router-dom';

function App() {
  return (
    <>        
      <Router>
      <navbar/>
      <Switch>
        <Route path = '/' exact/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
