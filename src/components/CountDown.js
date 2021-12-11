import React from 'react';

const CountDown = () => {
  return (
    <>
      <div className='CountDown' style={{}}>
        <div className='Main__Margin px-5 lg:px-12 rounded'>
          <div className='CountDown__inner md:px-8 md:pt-16'>
            <p className='text-center text-base md:text-2xl font-thin tracking-wide uppercase mb-6 gray-100'>
              Presale Launches In
            </p>
            <div className='CountDown__timer px-4 md:px-0'>
              <div className='text-center'>
                <p className='CountDown__timer-main text-3xl md:text-8xl lg:text-9xl font-bold mb-1'>
                  2
                </p>
                <p className='uppercase text-xs md:text-base font-light gray-100'>
                  Days
                </p>
              </div>
              <div className='text-center'>
                <p className='CountDown__timer-main text-3xl md:text-8xl lg:text-9xl font-bold mb-1'>
                  21
                </p>
                <p className='uppercase text-xs md:text-base font-light gray-100'>
                  hours
                </p>
              </div>
              <div className='text-center'>
                <p className='CountDown__timer-main text-3xl md:text-8xl lg:text-9xl font-bold mb-1'>
                  2
                </p>
                <p className='uppercase text-xs md:text-base font-light gray-100'>
                  minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountDown;
