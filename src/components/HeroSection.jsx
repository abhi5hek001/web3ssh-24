import clsx from 'clsx';
import { TypewriterEffect } from './ui/typewriter-effect';
import Partners from './Partners';
import { Highlight } from '@components/ui/hero-highlight';

const HeroSection = () => {
  const words = [
    {
      text: 'Web',
    },
    {
      text: '3.0',
    },
    {
      text: 'Summer',
    },
    {
      text: 'School',
    },
    {
      text: '&',
    },
    {
      text: 'Hackathon',
      className: 'text-blue-500',
    },
  ];

  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-start h-[calc(100vh-200px)] sm:h-fit z-10 text-white',
        'lg:justify-start ',
        'pt-0',
      )}
    >
      <TypewriterEffect
        words={words}
        className="px-10 min-h-[220px] sm:min-h-[160px] lg:min-h-[100px]"
      />

      <div className="text-2xl lg:text-3xl mb-6 text-center text-white font-sans font-semibold">
        Organized by IIIT SriCity
      </div>

      <div className="text-md lg:text-2xl  text-center xl:w-2/5 lg:w-1/2 sm:w-3/5 max-[375px]:w-4/5 w-3/4 text-white">
        Building the future, one block at a time! {<br />}Join us for a week of
        learning and fun.
      </div>
      <div>
        <div className="mt-8">
          {/* todo, work in progress */}
          <div className="text-2xl font-sans font-medium ">
            Summer School: 29th July to 3rd August
          </div>
          <div className="text-2xl font-sans font-medium ">
            Hackathon: 29th July to 3rd August
          </div>
        </div>
      </div>
      <div className="my-2">
        <div className="mt-10 lg:mt-10 flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 items-center justify-center">
          <a href="/register">
            <button className="w-64 transform hover:-translate-y-1 transition duration-400 relative inline-flex sm:h-16 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 pl-12 pr-8 py-4 text-xl sm:text-4xl font-semibold text-white backdrop-blur-3xl">
                Join Us
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                  ></path>
                </svg>
              </span>
            </button>
          </a>
          <a href="https://web3ssh.devfolio.co/">
            <button className="transform hover:-translate-y-1 transition duration-400 h-16 w-64 md:h-16 md:w-64 rounded-full bg-white text-black text-xl sm:text-2xl font-medium bg-opacity-50 flex items-center justify-center">
              Go for Hackathon
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
