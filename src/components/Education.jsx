import React from 'react'

const Education = () => {
  return (
    <div id='education' className='flex min-h-screen w-full flex-col items-center justify-center
    gap-20 p-14 md:p-20 lg:p-36'>
      <h1 className='text-center text-5xl font-light'>Education</h1>
      <div className='flex flex-wrap gap-0 md:flex-nowrap md:gap-10'>
        <div className="flex-1">
          <div className="relative space-y-1 border-1-2 p-8 text-left">
            <h3 className='text-xl font-semibold md:text-2xl'>Schooling</h3>
            <p className='font-light text-lg
            text-gray-600'>Nalanda Academy, Kota</p>
            <p className='text-sm text-gray-600'>Senior Secondary Education (PCM)
Year of Completion: 2023</p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-blue-500'></span>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative space-y-1 border-1-2 p-8 text-left">
            <h3 className='text-xl font-semibold md:text-2xl'>UG</h3>
            <p className='font-light text-lg
            text-gray-600'>Amrita Vishwa Vidyapeetham</p>
            <p className='text-sm text-gray-600'>Pursuing Btech CSE 2023-Present </p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-blue-500'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
