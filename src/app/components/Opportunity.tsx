import React from 'react';
import Image from 'next/image';
import { FaLongArrowAltRight } from 'react-icons/fa';
import TradingViewWidget from './TradingViewWidget';

const Opportunity = () => {
  return (
    <section className="flex w-full p-20 h-auto">
      <div className="w-1/2 flex items-start flex-col justify-center">
        <span className="bg-gradient-to-r from-sky-500 to-blue-400 bg-clip-text text-transparent font-semibold text-lg">
          OPPORTUNITY
        </span>
        <p className="mt-5 bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-5xl/[1.07] font-bold tracking-tight text-transparent md:text-5xl/[1.07]">
          Unlock the power of AI
        </p>
        <p className="my-7 text-neutral-300">
          <span className="bg-gradient-to-r from-sky-500 to-blue-400 bg-clip-text text-transparent font-semibold text-lg">
            Trading bot
          </span>{' '}
          offers a unique, yet extremely simple and accessible method of earning
          a passive income with cryptocurrency arbitrage! Contribute to out
          private trading pool and recieve automatic weekly directly to the
          wallet of your choice
        </p>
        <div className="flex gap-8">
          <button className="px-6 py-2 rounded-md bg-gradient-to-r from-sky-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl inline-flex items-center gap-3">
            Get arbitage?
            <FaLongArrowAltRight size={20} className="text-sky-500" />
          </button>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-end">
        <TradingViewWidget />
      </div>
    </section>
  );
};

export default Opportunity;
