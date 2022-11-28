import React from 'react'
import { NavLink } from 'react-router-dom'

const Decide = () => {
  return (
    <div className='w-full h-screen flex'>
      <div className="flex flex-col items-center w-1/2 h-screen justify-center bg-zinc-50">
        <div className="w-5/6">
          <h1 className='text-center text-4xl text-black'>Who are you?</h1>
          <h4 className='text-center text-xl mt-3 text-gray-700'>Welcome to CRUD!</h4>
          <div className="flex mt-12 justify-center">
            <span className='mr-12 block px-4 py-2 text-lg bg-cyan-500 text-white rounded border-cyan-500 border-2 hover:text-cyan-500 hover:bg-white'><NavLink to='../authseller'>Seller</NavLink></span> 
            <span className='ml-12 block px-4 py-2 text-lg bg-yellow-500 text-white rounded border-yellow-500 border-2 hover:text-yellow-500 hover:bg-white'><NavLink to='../authcompany'>Company</NavLink></span>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen flex items-center justify-center">
        <img src="../img/decide.jpg" alt="" />
      </div>
    </div>
  )
}

export default Decide