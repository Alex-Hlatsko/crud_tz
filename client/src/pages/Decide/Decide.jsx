import React from 'react'
import { NavLink } from 'react-router-dom'

const Decide = () => {
  return (
    <>
      <div>Decide</div>
      <NavLink to='../authseller'>Seller</NavLink>
      <NavLink to='../authcompany'>Company</NavLink>
    </>
  )
}

export default Decide