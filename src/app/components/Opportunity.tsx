import React from 'react'
import Image from 'next/image'
import { FaLongArrowAltRight } from "react-icons/fa";

const Opportunity = () => {
  return (
    <section className='flex w-full p-20 h-auto'>
        <div className='w-1/2 flex items-start flex-col justify-center'>
            <span className='text-[#ff6daa] font-semibold text-sm'>OPPORTUNITY</span>
            <p className='mt-4 font-bold text-4xl'>Earn A Passive Income</p>
            <p className='my-7'>
                <span className='text-[#ff6daa] font-semibold'>Trading bot</span> offers a unique, yet extremely simple and 
                accessible method of earning a passive income with cryptocurrency arbitrage! 
                Contribute to out private trading pool and recieve automatic weekly directly 
                to the wallet of your choice
            </p>
            <div className='flex gap-8'>
                <button className='px-6 py-2 rounded-md text-[#3500d4] font-semibold text-xl inline-flex items-center gap-3'>Get arbitage?
                    <FaLongArrowAltRight size={20}/>
                </button>

            </div>
        </div>
        <div className='w-1/2 flex items-center justify-center'>
            <Image src="/images/dummy.jpg" height="240" width="240" alt='dummyimage'/>
        </div>
    </section>
  )
}

export default Opportunity


