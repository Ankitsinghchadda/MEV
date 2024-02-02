import Image from 'next/image'
import React from 'react'

const CTA = () => {
  return (
    <section className='flex w-full p-20 h-auto'>
        <div className='w-1/2 flex items-center justify-center'>
            <Image src="/images/placeholder.png" height="240" width="240" alt='dummyimage'/>
        </div>
        <div className='w-1/2 flex items-start flex-col justify-center'>
            <span className='bg-gradient-to-r from-sky-500 to-blue-400 bg-clip-text text-transparent font-semibold text-lg'>GET STARTED</span>
            <p className='mt-4 font-bold text-4xl text-neutral-200'>Create A Free Account</p>
            <p className='my-7 text-neutral-300'>Open your account today for free. Zero signup fees.</p>
            <div className='flex gap-8'>
                <button className='px-6 py-2 bg-gradient-to-r from-sky-500 to-blue-400 rounded-full text-white'>Get Started</button>
                <button className='px-6 py-2 border border-gray-700 rounded-full text-white '>Presentation</button>
            </div>
        </div>
    </section>
  )
}

export default CTA