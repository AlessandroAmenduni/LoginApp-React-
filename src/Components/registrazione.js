import '../App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import reactDom from 'react-dom';


function Registrazione() {
  
  return (
    <div class="form-container">
    <form action="/login" id="form" method="POST">
      <h3>Registrazione</h3>
      <class class="container">
        <span class="icon">
          <i class="fasfa-user"></i>
        </span>
        <input type="text" placeholder="Username"/>
        <div class="container">
          <span class="icon">
            <i class="fasfa-at"></i>
          </span>
          <input type="email" placeholder="email"/>
        </div>
        <div class="container">
          <span class="icon">
            <i class="fasfa-lock"></i>
          </span>
          <input type="password" placeholder="password"/>
        </div>
        <input type="submit" value="registrati" id="registrazione"/>
      </class>
    </form>
  </div>
  );
}

export default Registrazione;
