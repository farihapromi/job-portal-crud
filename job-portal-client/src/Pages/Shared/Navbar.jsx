import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext/AuthContext'
import jobIcon from '../../assets/job_logo.png'

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext)

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Signout successfully")
      })
      .catch(error => {
        console.log("Error in signout", error)
      })
  }

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold border-b-2 border-blue-500"
      : "text-gray-700 hover:text-blue-500 transition-colors duration-200"

  const links = (
    <>
      <li><NavLink to='/' className={linkStyle}>Home</NavLink></li>
      <li><NavLink to='/myApplications' className={linkStyle}>My Applications</NavLink></li>
      <li><NavLink to='/addJob' className={linkStyle}>Add Job</NavLink></li>
      <li><NavLink to='/myPostedJob' className={linkStyle}>My Posted Job</NavLink></li>
    </>
  )

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      {/* Navbar Start (Logo + Mobile Menu) */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-[1]">
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
          <img src={jobIcon} className='w-10' alt="logo" />
          <span className="font-bold">Job Portal</span>
        </Link>
      </div>

      {/* Navbar Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {links}
        </ul>
      </div>

      {/* Navbar End (Auth Buttons) */}
      <div className="navbar-end pl-4 m-2 gap-2">
        {user ? (
          <>
            <span className="text-sm md:text-base font-medium text-gray-600">
              👤 {user.displayName || user.name || user.email}
            </span>
            <button
              className='btn btn-outline btn-error px-4 py-2 rounded-lg'
              onClick={handleSignOut}
            >
              Log out
            </button>
          </>


        ) : (
          <>
            <Link to='/sign-up' className='btn btn-outline btn-primary px-4 py-2 rounded-lg'>Sign Up</Link>
            <Link to='/login' className='btn btn-primary px-4 py-2 rounded-lg'>Login</Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar
