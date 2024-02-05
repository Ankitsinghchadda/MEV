import React from 'react';

const Hero = () => {
  return (
    <>
      {/* <section className="text-neutral-600 body-font h-screen w-screen flex items-center justify-center relative bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> 
      <div className="container mx-auto z-10">
                <h1 className='title-font text-8xl text-neutral-200 font-bold tracking-tightest'>Unleash <span className='bg-gradient-to-r from-sky-500 to-sky-400 bg-clip-text text-transparent'>Next Generation</span> 
                    {" "}Crypto graph reader
                </h1>

                <p className='mt-12 text-2xl text-[#b8b8b8] tracking-tight leading-relaxed'>The AI-powered crypto graph reader represents a groundbreaking innovation in the realm of cryptocurrency analysis. 
                Leveraging advanced machine learning algorithms, this cutting-edge technology is designed to interpret and analyze complex patterns within cryptocurrency price charts with unparalleled accuracy.</p>
        </div>
    </section> */}
      <section className="relative isolate transform-gpu pt-14">
        <div className="absolute inset-0 -z-10 bg-[image:radial-gradient(80%_50%_at_50%_-20%,hsl(206,81.9%,65.3%,0.5),rgba(255,255,255,0))]"></div>
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-white/5 [mask-image:radial-gradient(75%_50%_at_top_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="hero"
              width="80"
              height="80"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#hero)"
          ></rect>
        </svg>
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative mx-auto max-w-3xl text-center">
              <h1 className="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-5xl/[1.07] font-bold tracking-tight text-transparent md:text-7xl/[1.07]">
                Unleash the power of intuitive 
              </h1>
              <p className="mt-6 text-lg font-medium text-zinc-400 md:text-xl">
                Say goodbye to the outdated tools. Every small
                business owner, regardless of the background, can now manage
                their business like a pro. Simple. Intuitive. And never boring.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-y-8">
                <div>
                  <button
                    className="group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-glow"
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="radix-:Rjljaqla:"
                    data-state="closed"
                  >
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                      <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                    </span>
                    <div className="relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10">
                      Join the waitlist
                    </div>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                  </button>
                </div>
                <div className="group">
                  <a
                    className="flex flex-col items-center gap-1"
                    href="/#intro"
                  >
                    <p className="text-sm/6 text-zinc-400 duration-300 group-hover:text-zinc-100">
                      Learn more
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="text-zinc-400 duration-300 group-hover:translate-y-1.5 group-hover:text-zinc-100"
                    >
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
