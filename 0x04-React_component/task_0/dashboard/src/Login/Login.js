import React from 'react';
import './Login.css';

function Login() {
  return (
      <div className='Login'>
        <p>Login to access the full dashboard</p>
        <form>
        <label>
           Email: <input></input>
          </label>
          <label>
            Password: <input></input>
          </label>
          <button>ok</button>
        </form>
      </div>
  );
}
export default Login;
