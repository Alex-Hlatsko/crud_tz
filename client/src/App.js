import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const {data} = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUser();

  }, [])
  return (
    <>
      <Routes>
        <Route exact path="/" element={user ? <Home user={user}/> : <Navigate to="/login"/>}/>
        <Route exact path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route exact path="/signup" element={user ? <Navigate to="/" /> : <SignUp />} />
      </Routes>
    </>
  );
}

export default App;
