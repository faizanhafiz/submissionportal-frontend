import { Link } from 'react-router-dom';
import './login.css'
const Login = (params) => {

  return(<div className="login-container">
    <h2>Login</h2>
    <form action="/login" method="post">
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" required />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <small className="margin-top">
                Create new account{' '}
                <Link to="/signup" style={{ cursor: 'pointer', color: 'blue',padding:'10px' }}>
                    Sigup
                </Link>
            </small>
  </div>);

}

export default Login;
