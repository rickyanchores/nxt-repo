import Link from 'next/link';
import React from 'react'

const Hero = () => {
  return (
    <div className='Hero w-screen min-h-screen flex flex-col md:flex-row justify-around items-center  ' id='Hero' >
        <div className="user">
          <h1 className='Title text-4xl md:text-8xl'>NXT USER</h1>
          <Link href="./user">Go to user</Link>
        </div>
        <img className='HeroImage w-[400px]' src="https://images.unsplash.com/photo-1568733873715-f9d497a47ea0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHw2fHxibGFjayUyMGFuZCUyMHdoaXRlJTIwZGlnaXRhbHxlbnwwfHx8fDE3MTg2MjA1MzF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="HeroImage" />
    </div>
  )
}

export default Hero;