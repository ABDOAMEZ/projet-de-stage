import React from 'react';
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-cyan-900 px-16 py-4 flex item-center justify-between sticky top-0'>
      <div>
        {/* <img src='' alt="" /> */}
        <h1 className='text-yellow-100 text-lg text-bold'>Logo</h1>
      </div>

      <nav className='hidden md:visible'>
        <a href="" className='px-8 hover:text-white'>Home</a>
        <a href="" className='px-8 hover:text-white'>about us</a>
        <a href="" className='px-8 hover:text-white'>contact</a>
        <a href="" className='px-8 hover:text-white'>discover more</a>
      </nav>
    </header>
  )
}

export default Header
