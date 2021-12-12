import React from 'react';
import headerImage from '../assets/images/header.jpg';
import headerImage2 from '../assets/images/header-2.jpg';

const Header = () => {
  return (
    <>
      <header
        className='Landing__hero Main__Margin px-5 lg:px-4'
        id='header'
        style={{}}
      >
        <div className='Landing__hero-inner'>
          <div className='Landing__hero-video'>
            <img src={headerImage} alt='' />
            <div className='relative h-full flex items-center justify-center'>
              <div className='absolute w-full px-4'>
                <h1 className='font-bold uppercase text-lg md:text-3xl lg:text-4xl'>
                  $etc classic pharaohs
                </h1>
                <p className='text-center text-xs sm:text-base md:text-xl lg:text-2xl lg:py-4 lg:px-12'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  consectetur explicabo ratione
                </p>
                <div className='progressbar bg-orange-500 w-full h-6 rounded-md mt-2 relative border-2 border-gray-200 before:bg-green-600 before:w-2/3 before:absolute before:left-0 before:top-0 before:h-6 overflow-hidden sm:w-96 sm:mx-auto'></div>
                <h1 className='font-bold uppercase text-xl mt-2'>
                  1422 / 5000
                </h1>
                <button className='bg-green-600 hover:bg-green-700 transition-all duration-500 py-2 px-6 rounded-full mt-2 font-bold text-base md:text-lg md:px-8'>
                  Mint
                </button>
              </div>
              <img src={headerImage2} alt='' className='lg:w-full' />
            </div>
          </div>

          <div className='Landing__hero-video'></div>

          <a
            href='#.'
            target='_blank'
            rel='noreferrer'
            className='Landing__hero-button text-sm md:text-xl font-light text-center px-2 py-4 md:px-8 md:py-6 rounded uppercase'
          >
            Join The Discord
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
