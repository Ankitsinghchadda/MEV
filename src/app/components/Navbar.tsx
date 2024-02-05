import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className="body-font fixed z-20 w-full">
      <div className="container mx-auto flex p-3 items-center justify-between flex-1">
        <Link href="/" className="flex title-font items-center mb-4 md:mb-0">
          <span className="ml-3 text-2xl font-bold text-[#e8e8e8]">EVE</span>
          <span className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-sky-400 bg-clip-text text-transparent">
            BOT
          </span>
        </Link>
        <nav className="flex items-center text-base justify-center bg-slate-950/50 rounded-full p-[6px] gap-2">
          <Link
            href="#"
            className="text-[#e8e8e8] w-auto h-[36px] flex items-center justify-center p-2 bg-slate-950/60 rounded-full"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-[#e8e8e8] w-auto h-[36px] flex items-center justify-center px-4 py-2"
          >
            MarketPlace
          </Link>
          <Link
            href="#"
            className="text-[#e8e8e8] w-auto h-[36px] flex items-center justify-center px-4 py-2"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="text-[#e8e8e8] w-auto h-[36px] flex items-center justify-center px-4 py-2"
          >
            FAQ
          </Link>
        </nav>
        <div>
          <button className="items-center bg-slate-950/55 py-2 px-5 focus:outline-none rounded-full text-neutral-200 mt-4 md:mt-0 tracking-wide">
            <p>Connect Wallet</p>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
