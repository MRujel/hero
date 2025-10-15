import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';
import git from '../../assets/fi_2111432.png'


const Navbar = () => {
    return (
        <div className='max-w-[1200px] mx-auto mb-4'>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <Link to='/apps'>
        <li>
          Apps
        </li>
        </Link>
        <li><a>Installation</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
        <span><img className=' w-[50px] h-[50px] ' src={logo} alt="" /></span>
        <span>Hero.io</span>
    
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex justify-center items-center gap-2 px-1">
      <Link to='/'>
      <li>Home</li>
      </Link>
      <Link to='/apps'>
      <li>
        Apps
      </li>
        </Link>
      <Link to='/installation'>
      <li>Installation</li>
      </Link>
    </ul>
  </div>
  <div className="navbar-end">
    <a className='btn bg-[linear-gradient(125.07deg,#632EE3,rgba(159,98,242,1)_100%)] text-white textarea-lg px-5'><img src={git} alt="" /> Contribute</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;