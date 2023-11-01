import React from 'react'

const Navbar = () => {
  return (
    <div>
      <h1 className='text-red-600 font-bold text-4xl cursor-pointer'>Reels DB</h1>
      <div>
      <button className='bg-red-600 px-5 py-2 rounded cursor-pointer'>Sign In</button>
      <button className='bg-red-600 px-5 py-2 rounded cursor-pointer'>SIgn Up</button>
      </div>
    </div>
  )
}

export default Navbar
