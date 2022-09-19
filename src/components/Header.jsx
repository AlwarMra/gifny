import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../assets/gif.png'
const Header = () => {
  return (
    <header className='border-b border-b-fuchsia-700 bg-slate-700	shadow-header'>
      <div className='max-w-6xl mx-auto my-0 p-4'>
        <Link to={`/`}>
          <img src={logo} alt='' className='w-12 h-12 inline' />
          <span className='text-gradient-header font-bold text-4xl relative top-5'>
            NY
          </span>
        </Link>
      </div>
    </header>
  )
}

export default Header
