import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link href="/" className="flex title-font items-center mb-4 md:mb-0">
                <span className="ml-3 text-2xl font-bold text-neutral-800">EVE</span>
                <span className='text-2xl font-bold text-[#ff6daa]'>BOT</span>
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link href="#" className="text-neutral-800 mr-5 px-4 py-2 border-b-[3px] border-transparent hover:border-[#ff6daa] hover:text-[#ff6daa]">Home</Link>
                <Link href="#" className="text-neutral-800 mr-5 px-4 py-2 border-b-[3px] border-transparent hover:border-[#ff6daa] hover:text-[#ff6daa]">About Us</Link>
                <Link href="#" className="text-neutral-800 mr-5 px-4 py-2 border-b-[3px] border-transparent hover:border-[#ff6daa] hover:text-[#ff6daa]">Career</Link>
                <Link href="#" className="text-neutral-800 mr-5 px-4 py-2 border-b-[3px] border-transparent hover:border-[#ff6daa] hover:text-[#ff6daa]">FAQ</Link>
            </nav>
            <button className="items-center border border-[#3500d4] py-2 px-5 focus:outline-none hover:bg-[#3500d4] hover:text-white rounded-md text-base mt-4 md:mt-0 mr-5">LOGIN</button>
            <button className="items-center bg-[#3500d4] border py-[8px] px-[16px] focus:outline-none rounded-md text-white mt-4 md:mt-0 hover:border hover:border-[#3500d4] hover:bg-transparent hover:text-black">REGISTER</button>
        </div>
    </header>
  )
}

export default Navbar