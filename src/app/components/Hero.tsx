import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-neutral-800">Next Generation
                <br className="hidden lg:inline-block"/><span className="text-[#3804d4]">Crypto AI Graph Reader</span>
            </h1>
            <p className="mb-8 leading-relaxed">Progressively earn upto 30% more in crypto using our ai bot which help you in moment and assist you to make right decision at the right time.</p>
            <div className="flex justify-center">
                <button className="inline-flex text-white bg-[#3804d4] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-md text-lg">REGISTER</button>
            </div>
            <div className='flex flex-col gap-3'>
                <p className='mt-6 text-neutral-800 tracking-tight'>Active Membership</p>
                <p className='text-neutral-800 font-bold text-3xl'>27000+</p>
            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 py-10">
                <Image className="object-cover object-center rounded" width="600" height="700" alt="hero" src="/images/dummy.jpg"/>
            </div>
        </div>
    </section>
  )
}

export default Hero