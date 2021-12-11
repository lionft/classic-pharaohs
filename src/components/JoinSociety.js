import React from 'react';
import twitter from '../assets/images/icons/twitter-bg.svg';
import discord from '../assets/images/icons/discord-bg.svg';
import instagram from '../assets/images/icons/instagram-bg.svg';

const JoinSociety = () => {
  return (
    <>
      <div className='JoinSociety' style={{}}>
        <div className='JoinSociety__inner px-8 lg:px-4 pb-12 md:pb-20 Main__Margin'>
          <h3 className='text-xl md:text-4xl mt-4'>
            Join the Secret Society on our Socials
          </h3>
          <div className='JoinSociety__socials mt-4 md:mt-12'>
            <a
              href='#.'
              target='_blank'
              rel='noreferrer'
              className='JoinSociety__social header-bg rounded-xl px-0 py-6 md:py-11'
            >
              <div className='JoinSociety__social-image'>
                {' '}
                <img src={twitter} alt='' className='w-2/5 lg:w-3/5' />
              </div>
              <div className='JoinSociety__social-content'>
                <p className='mb-2 text-xl md:text-3xl font-light'>Twitter</p>
              </div>
            </a>
            <a
              href='#.'
              target='_blank'
              rel='noreferrer'
              className='JoinSociety__social header-bg rounded-xl px-0 py-6 md:py-11'
            >
              <div className='JoinSociety__social-image'>
                {' '}
                <img src={discord} alt='' className='w-2/5 lg:w-3/5' />
              </div>
              <div className='JoinSociety__social-content'>
                <p className='mb-2 text-xl md:text-3xl font-light'>Discord</p>
              </div>
            </a>
            <a
              href='#.'
              target='_blank'
              rel='noreferrer'
              className='JoinSociety__social header-bg rounded-xl px-0 py-6 md:py-11'
            >
              <div className='JoinSociety__social-image'>
                {' '}
                <img src={instagram} alt='' className='w-2/5 lg:w-3/5' />
              </div>
              <div className='JoinSociety__social-content'>
                <p className='mb-2 text-xl md:text-3xl font-light'>Instagram</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinSociety;
