import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='flex min-h-screen
    w-full flex-col items-center justify-center gap-16 p-8'>
        <h1 className='text-center text-6xl font-light
        text-blue-600'>Get in touch</h1>

        <form className='flex w-full max-w-md flex-col
        gap-8 rounded-lg p-6 md:max-w-lg lg:max-w-xl'>
            <div className="flex flex-col gap-4">
                <input type='text' placeholder='First Name' className='rounded-lg border-2 border-blue-400 px-4 py-3 text-lg outline-none transition-all
                duration-200 hover:bg-blue-50 focus:ring-2 
                focus:ring-blue-500'/>
                <input type='text' placeholder='Last Name' className='rounded-lg border-2 border-blue-400 px-4 py-3 text-lg outline-none transition-all
                duration-200 hover:bg-blue-50 focus:ring-2 
                focus:ring-blue-500'/>
                <input type='text' placeholder='Your Email' className='rounded-lg border-2 border-blue-400 px-4 py-3 text-lg outline-none transition-all
                duration-200 hover:bg-blue-50 focus:ring-2 
                focus:ring-blue-500'/>

            </div>
            <textarea placeholder='Your Message' className='h-32 w-full resize-none rounded-lg
            border-2 border-blue-400 px-4 py-3 text-lg
            outline-none transition-all duration-200
            hover:bg-blue-50 focus:rung-2
            focus:ring-blue-500'></textarea>
            <button className='rounded-lg border-2
            border-blue-400 bg-blue-500 px-6 py-3
            font-semibold text-white transition-all
            duration-200 hover:bg-blue-600'>Send Message</button>
        </form>
    </div>
  )
}

export default Contact