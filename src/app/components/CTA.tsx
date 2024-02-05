import Image from 'next/image';
import React from 'react';

const CTA = () => {
  return (
    <section className="flex w-full p-20 h-auto">
      <div className="w-1/2 flex items-center justify-center">
        <Image
          src="/images/placeholder.png"
          height="240"
          width="240"
          alt="dummyimage"
        />
      </div>
      <div className="w-1/2 flex items-start flex-col justify-center">
        <span className="bg-gradient-to-r from-sky-500 to-blue-400 bg-clip-text text-transparent font-semibold text-lg">
          GET STARTED
        </span>
        <p className="mt-4 font-bold text-4xl text-neutral-200">
          Best AI Model
        </p>
        <p className="my-7 text-neutral-300">
          Subscribe to our best AI model
        </p>
        <div className="flex gap-8">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-sm font-medium text-white backdrop-blur-3xl">
              Subscribe Now
            </span>
          </button>
          <button className="flex items-center gap-4 px-6 py-2 border border-gray-700 rounded-full text-white ">
            Explore more
            <svg
              className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
