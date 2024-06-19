import Card from '@/app/Components/Card.jsx/Card';
import React from 'react'

const Gallery = () => {
  return (
    <div className='Gallery w-screen min-h-screen flex flex-col justify-center items-center' id='Gallery'>
        <h1 className='text-4xl'>Gallery</h1>
        <div className="gallery-grid p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card />
          <Card />
          <Card />
        </div>
    </div>
  )
}

export default Gallery;