import Image from 'next/image'
import React from 'react'

const CTA = () => {
  return (
    <section className='flex w-full p-20 h-auto bg-gradient-to-r from-indigo-200 to-blue-50'>
        <div className='w-1/2 flex items-center justify-center'>
            <Image src="/images/dummy.jpg" height="240" width="240" alt='dummyimage'/>
        </div>
        <div className='w-1/2 flex items-start flex-col justify-center'>
            <span className='text-[#ff6daa] font-semibold text-sm'>GET STARTED</span>
            <p className='mt-4 font-bold text-4xl'>Create A Free Account</p>
            <p className='my-7'>Open your account today for free. Zero signup fees.</p>
            <div className='flex gap-8'>
                <button className='px-6 py-2 bg-[#3500d4] rounded-md text-white'>GET STARTED</button>
                <button className='px-6 py-2 border border-[#3500d4] rounded-md text-[#3500d4]'>PRESENTATION</button>
            </div>
        </div>
    </section>
  )
}

export default CTA