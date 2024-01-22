import React from 'react'
import FeatureCard from './FeatureCard'

const GetStarted = () => {
  return (
    <section className="text-neutral-800 body-font h-screen">
        <div className="container px-5 py-12 mx-auto flex flex-col items-center">
            <p className='uppercase mb-7 font-semibold text-[#ff6daa] text-center'>Get started</p>
            <p className='text-4xl font-bold text-center mb-5'>Getting Started Is Easy</p>
            <p className='text-gray-600 tracking-wide w-[50%]'>Register your account and start earning in just a few simple steps. Earn up to 30% monthly depending on the size of your contribution to the trading pool</p>
        </div>
        <FeatureCard number='01' heading='Register Your Account' subheading='Create your account to get access to our arbitrage and career earning opportunities' button />
        <FeatureCard number='02' heading='Contribute To The Pool' subheading='Create your account to get access to our arbitrage and career earning opportunities' reversed  />
        <FeatureCard number='03' heading='Start Earning' subheading='Create your account to get access to our arbitrage and career earning opportunities'  />
        <FeatureCard number='04' heading='Monitor Your Growth' subheading='Create your account to get access to our arbitrage and career earning opportunities' reversed />
    </section>
  )
}

export default GetStarted