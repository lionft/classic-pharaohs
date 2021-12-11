import React from 'react';

const Roadmap = () => {
  return (
    <>
      <div className='RoadMap' id='roadmap' style={{}}>
        <div className='px-5 pb-12 RoadMap__inner Main__Margin md:pb-12 lg:px-4'>
          <h2 className='text-3xl md:text-5xl text-left font-bold mb-4'>
            Roadmap
          </h2>
          <div className='RoadMap__phases'>
            <div
              className='mb-12 RoadMap__phase'
              style={{
                transform: 'translate(0px, 0px)',
                opacity: 1,
                visibility: 'inherit',
              }}
            >
              <div className='header-bg px-6 py-8 rounded-xl'>
                <h3 className='mb-4 text-xl md:text-3xl font-normal'>
                  Phase 1
                </h3>
                <p className='text-base font-thin  md:text-left md:text-xl'>
                  Crypto rats will be released in two parts: Pre-Sale and a
                  Public Mint. During the presale 3000 Crypto rats will be
                  available at a discounted price of 0.06 ETH. Pre Sale holders
                  will qualify for a $10,000 giveaway that will be airdropped
                  randomly to 3 minters post mint. Secondly the public sale, the
                  remaining 6,824 will be available on a first come first serve
                  basis. 8 Rats Limit per wallet. You will have a 1-8 chance of
                  minting a Crypto Rats and joining the secret society.
                </p>
              </div>
            </div>
            <div
              className='mb-12 RoadMap__phase'
              style={{
                transform: 'translate(0px, 0px)',
                opacity: 1,
                visibility: 'inherit',
              }}
            >
              <div className='header-bg px-6 py-8 rounded-xl'>
                <h3 className='mb-4 text-xl md:text-3xl font-normal'>
                  Phase 2
                </h3>
                <p className='text-base font-thin  md:text-left md:text-xl'>
                  Everyone who owns a crypto rat will have access to secret
                  society events; we plan to host our first in person event in
                  Q1 2022. This event will be hosted to help bring our community
                  leaders and Founding team together to brainstorm and develop
                  Crypto Rats long term, and continue providing value for its
                  holders. In addition, 25 ultra rare rats will be minted upon
                  release. These rats will be characterized by diamond necklaces
                  around their necks with Crypto Rats pendants. The 25 people
                  holding these ultra rare rats will have an all expense paid
                  trip to Miami. These same 25 holders will be given seats at
                  the Secret Society Board, they will be helping to lead
                  community driven projects and picking location to the events.
                  Every six months we will select 25 new board members amongst
                  our holders. We want to create a real society between our
                  holders and our personal community to grow it beyond measures.
                </p>
              </div>
            </div>
            <div
              className='mb-12 RoadMap__phase'
              style={{
                transform: 'translate(0px, 0px)',
                opacity: 1,
                visibility: 'inherit',
              }}
            >
              <div className='header-bg px-6 py-8 rounded-xl'>
                <h3 className='mb-4 text-xl md:text-3xl font-normal'>
                  Phase 3
                </h3>
                <p className='text-base font-thin  md:text-left md:text-xl'>
                  The awakening. Now it's time to play, we plan to release a 3D
                  mobile game to continue building out the ecosystem. A majority
                  of the minting revenue will be allocated back into the
                  business and project to continue its growth. Once the total
                  supply is reduced post trade in event the rare crypto rats
                  will be created as main characters awarding their owners in
                  game royalties, likability, and more.
                </p>
              </div>
            </div>
            <div
              className='mb-12 RoadMap__phase'
              style={{
                transform: 'translate(0px, 0px)',
                opacity: 1,
                visibility: 'inherit',
              }}
            >
              <div className='header-bg px-6 py-8 rounded-xl'>
                <h3 className='mb-4 text-xl md:text-3xl font-normal'>
                  Phase 4
                </h3>
                <p className='text-base font-thin  md:text-left md:text-xl'>
                  Finally. Growing from within. We will launch a community grant
                  fund starting with $100,000 for the first year of development
                  for those that want to contribute value to the Secret Society
                  Crypto Rats and receive funding from the Team. In addition,
                  2.5% of OpenSea fees will be added to future community grants
                  in order to consistently add value and utility to the project.
                  We will be looking to expand our team from our holders and
                  growing the project gradually over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
