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
    <section className={`mx-auto text-neutral-600 flex items-center justify-center gap-40 p-8 ${reversed === true ? 'flex-row-reverse': 'flex-row'}`}>
        <div className='border-l-4 border-neutral-200 pl-8 w-1/2'>
            <span className='font-bold text-[#ff6daa] text-3xl tracking-tight'>{number}</span>
            <p className='font-bold text-neutral-800 text-4xl mt-3 mb-8 tracking-tight'>{heading}</p>
            <p className='w-[400px]'>{subheading}</p>
            { button && <button className='uppercase py-3 px-16 bg-[#3804d4] text-white rounded-md mt-6'>Register</button> }
        </div>
        <Image alt="dummy" height="240" width="240" src="/images/dummy.jpg"/>
    </section>
  )
}

export default FeatureCard