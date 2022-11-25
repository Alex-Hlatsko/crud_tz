import React from 'react'
import {Link} from 'react-router-dom';

const Login = () => {
    const googleAuth = () => {
      window.open(
          `${process.env.REACT_APP_API_URL}/auth/google/callback`,
          "_self"
      );
    };
  return (
    <>
        <div>Login</div>
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button>Log in</button>

        <button onClick={googleAuth}>Sign in with Google</button>
        <Link to="/signup">Sign up</Link>
    </>
  );
}

export default Login;