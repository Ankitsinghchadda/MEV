import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="body-font h-auto bg-[#1c1c1c]">
        <div className="container mx-auto flex p-3 items-center justify-between flex-1">
            <Link href="/" className="flex title-font items-center mb-4 md:mb-0">
                <span className="ml-3 text-2xl font-bold text-[#e8e8e8]">EVE</span>
                <span className='text-2xl font-bold bg-gradient-to-r from-sky-500 to-sky-400 bg-clip-text text-transparent'>BOT</span>
            </Link>
            <nav className="flex items-center text-base justify-center bg-[#2b2b2b] border border-[#373737] rounded-full p-[6px] gap-2">
                <Link href="#" className="text-[#e8e8e8] w-[80px] h-[36px] flex items-center justify-center p-2 bg-[#383838] rounded-full">Home</Link>
                <Link href="#" className="text-[#e8e8e8] w-[80px] h-[36px] flex items-center justify-center">About Us</Link>
                <Link href="#" className="text-[#e8e8e8] w-[80px] h-[36px] flex items-center justify-center">Career</Link>
                <Link href="#" className="text-[#e8e8e8] w-[80px] h-[36px] flex items-center justify-center">FAQ</Link>
            </nav>
            <div>
              <button className="items-center border border-[#373737] bg-[#29292c] py-2 px-5 focus:outline-none text-neutral-200 rounded-full text-base mt-4 md:mt-0 mr-5 tracking-tight">Login</button>
              <button className="items-center bg-[#29292c] border border-[#373737] py-2 px-5 focus:outline-none rounded-full text-neutral-200 mt-4 md:mt-0 hover:border hover:bg-transparent tracking-tight">Register</button>
            </div>
        </div>
    </header>
  )
}

export default Navbar