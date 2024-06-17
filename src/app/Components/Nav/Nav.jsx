import React from 'react'

const Nav = () => {
  return (
    <div className='Nav bg-slate-950 flex justify-between items-center p-4'>
        <h1>Nxt</h1>
        <ul className="navLinks flex space-x-8 items-center">
            <li>Home</li>
            <li>About</li>
            <li>FAQ</li>
        </ul>
    </div>
  )
}

export default Nav;