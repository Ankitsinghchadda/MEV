import React from 'react'

const Hero = () => {
  return (
    <section className="text-neutral-600 body-font h-[calc(100vh-90px)] flex items-center justify-center bg-[#1c1c1c]">
        <div className="container mx-auto">
                <h1 className='title-font text-8xl text-neutral-200 font-bold tracking-tightest'>A <span className='bg-gradient-to-r from-sky-500 to-sky-400 bg-clip-text text-transparent'>Next Generation</span> 
                    {" "}Crypto graph reader
                </h1>

                <p className='mt-12 text-2xl text-[#b8b8b8] tracking-tight leading-relaxed'>The AI-powered crypto graph reader represents a groundbreaking innovation in the realm of cryptocurrency analysis. 
                Leveraging advanced machine learning algorithms, this cutting-edge technology is designed to interpret and analyze complex patterns within cryptocurrency price charts with unparalleled accuracy.</p>
        </div>
    </section>
  )
}

export default Hero