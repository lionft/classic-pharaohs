import React from 'react';

const mint = () => {
  return (
    <>
      {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
        <>
          <p className='font-bold text-default'>The sale has ended.</p>
          <p className='font-bold text-default'>
            You can still find {CONFIG.NFT_NAME} on
          </p>

          <a target='_blank' rel='noreferrer' href={CONFIG.MARKETPLACE_LINK}>
            {CONFIG.MARKETPLACE}
          </a>
        </>
      ) : (
        <>
          {blockchain.account === '' || blockchain.smartContract === null ? (
            <>
              <div className='mint__btn__wrapper'>
                <button
                  className='btn mint__btn'
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(connect());
                    getData();
                  }}
                >
                  Connect
                </button>
              </div>
              {blockchain.errorMsg !== '' ? (
                <>
                  <p className='err__msg text-center'>{blockchain.errorMsg}</p>
                </>
              ) : null}
            </>
          ) : (
            <>
              <p className='err__msg text-center'>{feedback}</p>
              <>
                <div className='buy__wrapper'>
                  <div>
                    <button
                      className=''
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        decrementMintAmount();
                      }}
                    >
                      <span className='text-xl'>-</span>
                    </button>
                  </div>

                  <p className='text-default font-bold text-xl border px-4 py-0.5 rounded-sm'>
                    {mintAmount}
                  </p>
                  <div>
                    <button
                      className=''
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        incrementMintAmount();
                      }}
                    >
                      <span className='text-xl'>+</span>
                    </button>
                  </div>
                </div>
              </>
              <>
                <div>
                  <div className='mint__btn__wrapper'>
                    <button
                      className='btn mint__btn'
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs();
                        getData();
                      }}
                    >
                      <span>{claimingNft ? 'BUSY' : 'MINT'}</span>
                    </button>
                  </div>
                </div>
              </>
            </>
          )}
        </>
      )}
    </>
  );
};

export default mint;
