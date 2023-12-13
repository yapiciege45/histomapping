import Image from 'next/image'
import React from 'react'

export const HomeComponent = () => {

  return (
    <div className='h-[calc(100vh-5rem)] relative w-full'>
      <Image src='/home-bg.png' fill />
      <div className='absolute w-full h-full bg-black/80 flex justify-center items-center'>
        <div className='w-11/12 md:w-10/12 flex flex-col items-start'>
          <p className='text-xl md:text-3xl lg:text-5xl font-bold text-white fade-in-left'>Ready for Histomapping?</p>
          <p className='text-white text-md md:text-lg lg:text-xl mt-3 fade-in-left'>Are you ready for learning history in new way with histomapping method?</p>
        </div>
      </div>
      <div class="scroll-downs fade-in-bottom">
        <div class="mousey">
          <div class="scroller"></div>
        </div>
      </div>
    </div>
  )
}
