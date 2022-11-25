import React from 'react'

const Home = (userDetails) => {
    const user = userDetails.user;
    const logout = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/logout`,
            "_self"
        );
    };
  return (
    <>
        <div>Login</div>
        <input type="text" defaultValue={user.name} placeholder='User Name' />
        <input type="email" defaultValue={user.email}  placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button onClick={logout}>Log Out</button>
    </>
  );
}

export default Home;