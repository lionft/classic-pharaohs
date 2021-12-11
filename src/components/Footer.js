import React from 'react';
import rightArrow from '../assets/images/icons/right-arrow.svg';
import discord from '../assets/images/icons/discord.svg';
import twitter from '../assets/images/icons/twitter.svg';
import instagram from '../assets/images/icons/instagram.svg';
const Footer = () => {
  return (
    <>
      <footer className='bg-cryptoblack-500 w-full text-white' style={{}}>
        <div className='Main__Margin px-5 lg:px-4 py-8 flex flex-wrap lg:justify-between items-end'>
          <div className='w-full lg:w-1/2'>
            <p className='text-lg mb-4'>Get on the List</p>
            <div>
              <form
                className='flex bg-gray-200 rounded py-2 w-full  text-lg lg:w-72'
                style={{ background: 'rgba(255, 255, 255, 0.1)' }}
              >
                <input
                  className=' placeholder-white bg-transparent w-full px-4 text-base md:text-lg font-light focus:outline-none'
                  placeholder='Email Address'
                  type='email'
                  required
                />
                <button className='w-2/12'>
                  <img alt='' className=' h-6' src={rightArrow} />
                </button>
              </form>
              <div className='py-2 text-left' />
            </div>
            <p className='text-lg mb-2 opacity-40	mt-8'>© 2021 Crypto Rats</p>
          </div>
          <div className='w-full lg:w-1/2 mt-8 lg:mt-0 grid justify-items-start lg:justify-items-end'>
            <div className='pb-8 grid justify-items-start lg:justify-items-end'>
              <a href='#.' className='text-lg accent mb-4 underline'>
                Terms &amp; Conditions
              </a>
              <a href='/' className='text-lg accent mb-4 underline'>
                Privacy Policy
              </a>
            </div>
            <div className='flex flex-row'>
              <a href='#.' target='_blank' rel='noreferrer'>
                <img alt='' className='w-6 h-6 mr-4' src={discord} />
              </a>
              <a href='#.' target='_blank' rel='noreferrer'>
                <img alt='' className='w-6 h-6 mr-4' src={twitter} />
              </a>
              <a href='#.' target='_blank' rel='noreferrer'>
                <img alt='' className='w-6 h-6 mr-4' src={instagram} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
