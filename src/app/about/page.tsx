import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen bg-darkblue text-yellow-500 flex flex-col'>
      <div className='w-full relative min-h-96'>
      <div className="absolute left-1/2 top-0 z-20 h-96 w-full -translate-x-1/2 bg-black bg-opacity-50" />
      <div className="absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 text-center -translate-y-1/2 flex-col gap-2 text-white">
          <h1 className="w-full text-center font-bold text-5xl text-yellow-500">
            About us
          </h1>
          <p>Get to know us better</p>
        </div>
        <Image src={'/53410604317_3d4e87bc6c.jpg'} alt='' className='object-cover' fill />
      </div>
    </div>
  )
}

export default page