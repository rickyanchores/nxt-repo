import Link from 'next/link';
import React from 'react'

const Nav = () => {
  return (
    <div className='Nav bg-slate-100 text-gray-600 flex justify-between items-center p-4 m-4 sticky top-2'>
        <Link href="/#Hero"><h1 className='font-bold text-2xl'>NxT</h1></Link>
        <ul className="navLinks flex justify-around items-center gap-4">
          <Link href="/#Gallery">Gallery</Link>
          <Link href="/#About">About</Link>
          <Link href="/#Faq">Faq</Link>
        </ul>
    </div>
  )
}

export default Nav;