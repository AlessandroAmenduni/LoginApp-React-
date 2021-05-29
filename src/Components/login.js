import '../App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import reactDom from 'react-dom';


function Login() {
  
  return (
    <div class="form-container">
      <div id="reg">
        <h3>Login</h3>
        <class class="container">
          <span class="icon">
            <i class="fasfa-user"></i>
          </span>
          <input type="text" placeholder="Username" id="username"/>
          <div class="container">
            <span class="icon">
              <i class="fasfa-at"></i>
            </span>
            <input type="email" placeholder="email" id="email"/>
          </div>
          <div class="container">
            <span class="icon">
              <i class="fasfa-lock"></i>
            </span>
            <input type="password" placeholder="password" id="password"/>
          </div>
          <input type="submit" value="login" id="login" onClick={Redirect}/>
          <Link to="/registrazione">
            <input type="submit" value="registrati" id="registrazione"/>
          </Link>
        </class>
      </div>
  </div>
  );

  function Redirect(){

    axios({
      method: 'post',
      url: 'http://localhost:3000/login',
      data: {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
      }
    });
  }
}

export default Login;
