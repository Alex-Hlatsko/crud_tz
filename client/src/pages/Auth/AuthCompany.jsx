import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { logInCompany, signUpCompany } from '../../actions/AuthAction';

const AuthCompany = () => {
  const dispatch = useDispatch();
    const loading = useSelector((state) => state.AuthReducer.loading)
    const [isSignUp, setIsSignUp] = useState(true);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmpass: "",
        bid_amount: "",
        campaign_fund: "",
        status: "",
        town: "",
        radius: "",
        keywords: ""
    });
    const [confirmPassword, setConfirmPassword] = useState(false);

    const handleChange = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(isSignUp){
            data.password === data.confirmpass ? dispatch(signUpCompany(data)) : setConfirmPassword(true)
        } else {
            dispatch(logInCompany(data))
        }
    }

    const resetForm = () => {
        setConfirmPassword(false)
        setData({
            name: "",
            email: "",
            password: "",
            confirmpass: "",
            bid_amount: "",
            campaign_fund: "",
            town: "",
            radius: "",
        })
    }

  return (
    <>
      <div className='min-h-screen flex justify-between'>
        <div className="min-h-screen w-1/2 bg-zinc-50 flex items-center justify-center">
            <form className='p-2 flex flex-col w-90' onSubmit={handleSubmit}>
                <h1 className='text-4xl mb-8 font-bold text-gray-800'>Company</h1>
                <h1 className='text-2xl mb-3 font-semibold text-gray-700'>{isSignUp ? "Create Account to Get Started" : "Login to Your Account to Get Started"}</h1>
                
                {isSignUp && 
                <input 
                className='my-1 p-2 border-2 rounded-lg' 
                type="text" 
                placeholder='Company name' 
                name='name' 
                onChange={handleChange}
                value={data.name}/>
                }

                <input 
                className='my-1 p-2 border-2 rounded-lg' 
                type="email" 
                placeholder='Email' 
                name='email' 
                onChange={handleChange}
                value={data.email}/>

                <input 
                className='my-1 p-2 border-2 rounded-lg' 
                type="password" 
                placeholder='Password' 
                name='password' 
                onChange={handleChange}
                value={data.password}/>

                {isSignUp && 
                <input 
                className='my-1 p-2 border-2 rounded-lg' 
                type="password" 
                placeholder='Confirm Password'
                name='confirmpass'
                onChange={handleChange}
                value={data.confirmpass}/>}

                {confirmPassword && <span className='text-xs text-red-600'>Confirm password is not same</span>}

                {isSignUp && 
                <>
                <input 
                className='my-1 p-2 border-2 rounded-lg' 
                type="number" 
                placeholder='Bid Amount' 
                name='bid_amount' 
                onChange={handleChange}
                value={data.bid_amount}/>
                
                <input 
                className='my-1 p-2 border-2 rounded-lg' 
                type="number" 
                placeholder='Campaign Fund' 
                name='campaign_fund' 
                onChange={handleChange}
                value={data.campaign_fund}/>

                <input 
                className='my-1 p-2 border-2 rounded-lg' 
                type="text" 
                placeholder='Town' 
                name='town' 
                onChange={handleChange}
                value={data.town}/>

                <input 
                className='my-1 p-2 border-2 rounded-lg' 
                type="Number" 
                placeholder='Radius' 
                name='radius' 
                onChange={handleChange}
                value={data.radius}/>
                </>
                }

                <span className='mt-4 mb-4 text-base cursor-pointer text-gray-500 hover:text-cyan-500' onClick={() => {setIsSignUp((prev) => !prev); resetForm()}}>{isSignUp ? "Already have an account? Login!" : "Dont have an account? Sign Up"}</span>
                <button className='mt-3 p-1 block border-2 border-cyan-500 bg-cyan-500  w-2/4 rounded text-white hover:bg-white hover:text-cyan-500' type='submit'>
                    {loading ? "Loading..." : isSignUp ? "Sign up" : "Login"}
                </button>
            </form>
        </div>
        <div className="min-h-screen w-1/2 flex items-center justify-center">
            <img src="../img/company.jpg" alt="foto1" />
        </div>
    </div>
    </>
  )
}

export default AuthCompany