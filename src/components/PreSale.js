import React from 'react';

const PreSale = () => {
  return (
    <>
      <div className='PreSale' id='pre-sale' style={{}}>
        <div className='PreSale__inner Main__Margin px-5 lg:px-4 pb-12 md:pb-20'>
          <h2 className='text-2xl font-bold md:text-5xl uppercase mb-8 px-0 md:px-8 py-6 md:py-8 header-bg text-center rounded-2xl'>
            How to enter the Pre-Sale
          </h2>
          <ol className='mb-8'>
            <li className='text-xl font-thin md:text-2xl mb-4 gray-100'>
              1. Complete and submit the SweepWidget!
            </li>{' '}
            <li className='text-xl font-thin md:text-2xl gray-100'>
              2. Invite at least 5 friends to our discord community.
            </li>
          </ol>
          <a
            href='#.'
            target='_blank'
            rel='noreferrer'
            className='PreSale__button w-full block text-center px-8 py-4 mb-5 rounded text-xl font-light'
          >
            Enter the Pre-Sale
          </a>
          <p className='text-xs md:text-base gray-100 font-thin  gray-100 text-center  md:px-8'>
            Once all the steps are completed log, into our{' '}
            <a href='#.' target='_blank' rel='noreferrer' className='underline'>
              discord community
            </a>
            . Go to the channel invite-tracker and type "!invites". As soon as
            it shows 5+ you’ll be automatically enrolled into our whitelist.
          </p>
        </div>
      </div>
    </>
  );
};

export default PreSale;
