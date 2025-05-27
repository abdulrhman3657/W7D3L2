import React from 'react'

function Navbar() {
  return (
    <div className=''>
      <div className='p-3 bg-blue-900 text-white flex justify-around items-center'>
        <img className='w-10  rounded-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwOtTuhnUF9d3veTXIqjKa77kTiFY5dWMiA&s" alt="" />
        <span className='text-center text-xl font-bold'>Welcome to my wiki</span>
      </div>
    </div>
  )
}

export default Navbar