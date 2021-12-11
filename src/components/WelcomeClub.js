import React from 'react';
import welcomeImage from '../assets/images/welcome-club-1.png';
import welcomeImage2 from '../assets/images/welcome-club-2.png';
import welcomeImage3 from '../assets/images/welcome-club-3.png';
import welcomeImage4 from '../assets/images/welcome-club-4.png';

const WelcomeClub = () => {
  return (
    <>
      <div className='WelcomeClub' id='why-crypto-rats' style={{}}>
        <div className='px-5 pb-12 WelcomeClub__inner Main__Margin md:pb-16 lg:px-4'>
          <h2 className='text-3xl md:text-5xl text-left font-bold mb-4 undefined'>
            Why Crypto Rats?
          </h2>
          <p className='text-base mb-4 md:mb-8 font-thin  md:text-left md:text-xl'>
            When you mint a Crypto Rat you are not minting just another NFT, you
            are gaining access to a secret society with endless possibilities!
            Your Crypto Rat will serve as your membership card to the secret
            society club. With This membership card you will have access to
            private events, additional digital collectibles , access to earn
            crypto and more. Don’t get left out, soon the secret will be out.
          </p>
          <div className='WelcomeClub__images'>
            <div
              className='WelcomeClub__image'
              style={{
                transform: 'translate(0px, 0px)',
                opacity: 1,
                visibility: 'inherit',
              }}
            >
              <img src={welcomeImage} alt='' />
            </div>
            <div
              className='WelcomeClub__image'
              style={{
                transform: 'translate(0px, 0px)',
                opacity: 1,
                visibility: 'inherit',
              }}
            >
              <img src={welcomeImage2} alt='' />
            </div>
            <div
              className='WelcomeClub__image'
              style={{
                transform: 'translate(0px, 0px)',
                opacity: 1,
                visibility: 'inherit',
              }}
            >
              <img src={welcomeImage3} alt='' />
            </div>
            <div
              className='WelcomeClub__image'
              style={{
                transform: 'translate(0px, 0px)',
                opacity: 1,
                visibility: 'inherit',
              }}
            >
              <img src={welcomeImage4} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeClub;
