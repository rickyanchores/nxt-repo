import React from 'react'

const Nav = () => {
  return (
    <div className='Nav bg-slate-100 text-gray-600 flex justify-between items-center p-4'>
        <h1>Nxt</h1>
        <ul className="navLinks flex justify-around items-center gap-4">
            <li>Home</li>
            <li>About</li>
            <li>FAQ</li>
        </ul>
    </div>
  )
}

export default Nav;