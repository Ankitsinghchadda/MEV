import Image from 'next/image'
import React from 'react'

interface FeatureCardProps {
    number: string,
    heading: string,
    subheading: string,
    reversed?: boolean,
    button?: boolean
}

const FeatureCard: React.FC<FeatureCardProps> = ({ number, heading, subheading, reversed, button}) => {
  return (
    <section className={`mx-auto text-neutral-600 flex items-center justify-center gap-40 p-12 ${reversed === true ? 'flex-row-reverse': 'flex-row'}`}>
        <div className='w-1/2'>
          <div className='flex gap-8'>
            <div className='w-1 rounded h-50 bg-neutral-200'></div>
            <div className='py-2'>
              <span className='font-bold bg-gradient-to-r from-sky-500 to-blue-400 bg-clip-text text-transparent text-4xl tracking-wide'>{number}</span>
              <p className='font-bold text-neutral-200 text-4xl mt-3 mb-8'>{heading}</p>
              <p className='w-[400px] text-neutral-400'>{subheading}</p>
              { button && <button className=' py-3 px-16 bg-gradient-to-r from-sky-500 to-blue-400 text-white rounded-full mt-6'>Register</button> }
            </div>
          </div>
        </div>
        <Image alt="dummy" height="240" width="240" src="/images/placeholder.png"/>
    </section>
  )
}

export default FeatureCard