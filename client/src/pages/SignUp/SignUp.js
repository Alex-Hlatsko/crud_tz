import React from 'react'
import {Link} from 'react-router-dom';

const SignUp = () => {
    const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`,
			"_self"
		);
	};
  return (
    <>
        <div>Login</div>
        <input type="text" placeholder='User Name' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button>Sign up</button>

        <button onClick={googleAuth}>Sign up with Google</button>
        <Link to="/login">Log in</Link>
    </>
  );
}

export default SignUp;