import React from 'react'
import FeatureCard from './FeatureCard'

const GetStarted = () => {
  return (
    <section className="body-font bg-[#1f1f1f]">
        <div className="container px-5 py-12 mx-auto flex flex-col items-center">
            <p className='uppercase mb-7 font-semibold text-center bg-gradient-to-r from-sky-500 to-blue-400 bg-clip-text text-transparent text-xl'>Get started</p>
            <p className='text-6xl font-bold text-center mb-5 text-neutral-200'>Getting Started Is <span className='bg-gradient-to-r from-sky-500 to-blue-400 bg-clip-text text-transparent'>Easy</span></p>
            <p className='text-neutral-400 tracking-wide text-center w-1/2 text-lg'>Register your account and start earning in just a few simple steps. Earn up to 30% monthly depending on the size of your contribution to the trading pool</p>
        </div>
        <FeatureCard number='01' heading='Register Your Account' subheading='Create your account to get access to our arbitrage and career earning opportunities' button />
        <FeatureCard number='02' heading='Contribute To The Pool' subheading='Create your account to get access to our arbitrage and career earning opportunities' reversed  />
        <FeatureCard number='03' heading='Start Earning' subheading='Create your account to get access to our arbitrage and career earning opportunities'  />
        <FeatureCard number='04' heading='Monitor Your Growth' subheading='Create your account to get access to our arbitrage and career earning opportunities' reversed />
    </section>
  )
}

export default GetStarted