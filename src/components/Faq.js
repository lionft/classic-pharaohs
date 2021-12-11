import React from 'react';

import SingleFaq from './SingleFaq';
const Faq = () => {
  return (
    <>
      <div className='FrequentlyAsked' id='faq'>
        <div className='FrequentlyAsked__inner Main__Margin px-5 lg:px-4 pb-12 md:pb-16'>
          <h3 className='text-center mb-12 rounded text-2xl md:text-5xl'>
            Frequently Asked Questions
          </h3>
          <SingleFaq title='hello' content='Hi here I am' />
        </div>
      </div>
    </>
  );
};

export default Faq;
