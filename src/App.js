import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import reactDom from 'react-dom';
import login from './Components/login';
import registrazione from './Components/registrazione';


function App() {
  
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={login} />
          <Route path="/registrazione" component={registrazione} />
        </Switch>
      </Router>
  );
}

export default App;
