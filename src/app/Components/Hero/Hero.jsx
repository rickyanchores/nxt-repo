import React from 'react'

const Hero = () => {
  return (
    <div className='Hero w-screen min-h-screen flex justify-around items-center'>
        <h1 className='Title text-8xl'>HERO</h1>
        <img className='HeroImage w-[600px]' src="https://images.unsplash.com/photo-1568733873715-f9d497a47ea0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHw2fHxibGFjayUyMGFuZCUyMHdoaXRlJTIwZGlnaXRhbHxlbnwwfHx8fDE3MTg2MjA1MzF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="HeroImage" />
    </div>
  )
}

export default Hero;