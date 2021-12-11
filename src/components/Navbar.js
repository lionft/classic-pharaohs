import React from 'react';
import logo from '../assets/images/logo.png';
import discord from '../assets/images/icons/discord.svg';
import twitter from '../assets/images/icons/twitter.svg';
import instagram from '../assets/images/icons/instagram.svg';
import tiktok from '../assets/images/icons/tiktok.svg';

const Navbar = () => {
  return (
    <>
      <nav className='Navbar' style={{}}>
        <div className='px-5 Navbar__inner Main__Margin lg:px-4'>
          <div
            className='Navbar__logo'
            style={{ transform: 'translate(0px, 0px)', opacity: 1 }}
          >
            <a href='/'>
              <img src={logo} alt='crypto-rat logo' />
            </a>
          </div>
          <button className='Navbar__menuIcon' aria-label='Menu'>
            <svg
              width={24}
              height={24}
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3 12h18M3 6h18M3 18h18'
                stroke='#fff'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <div className='Navbar__links'>
            <div className='Navbar__menu-links mr-8'>
              <a className='Navbar__menu-link uppercase' href='#pre-sale'>
                Pre-sale
              </a>
              <a
                className='Navbar__menu-link uppercase'
                href='#why-crypto-rats'
              >
                Why Crypto Rats
              </a>
              <a className='Navbar__menu-link uppercase' href='#roadmap'>
                Roadmap
              </a>
              <a className='Navbar__menu-link uppercase' href='#team'>
                Team
              </a>
              <a className='Navbar__menu-link uppercase' href='#faq'>
                Faq
              </a>
            </div>
            <div className='Navbar__social-links'>
              <a href='#' target='_blank' rel='noreferrer'>
                <img alt='' className='w-6 h-6 mr-4' src={discord} />
              </a>
              <a href='#' target='_blank' rel='noreferrer'>
                <img alt='' className='w-6 h-6 mr-4' src={twitter} />
              </a>
              <a href='#' target='_blank' rel='noreferrer'>
                <img alt='' className='w-6 h-6 mr-4' src={instagram} />
              </a>
              <a href='#' target='_blank' rel='noreferrer'>
                <img alt='' className='w-6 h-6' src={tiktok} />
              </a>
            </div>
          </div>
        </div>
        {/* <div className='MobileNavbar'>
          <ul className='MobileNavbar__links'>
            <div>
              <li className='MobileNavbar__menuLink'>
                <a className='Navbar__menu-link uppercase' href='#pre-sale'>
                  Pre-sale
                </a>
              </li>
              <li className='MobileNavbar__menuLink'>
                <a
                  className='Navbar__menu-link uppercase'
                  href='#why-crypto-rats'
                >
                  Why Crypto Rats
                </a>
              </li>
              <li className='MobileNavbar__menuLink'>
                <a className='Navbar__menu-link uppercase' href='#roadmap'>
                  Roadmap
                </a>
              </li>
              <li className='MobileNavbar__menuLink'>
                <a className='Navbar__menu-link uppercase' href='#team'>
                  Team
                </a>
              </li>
              <li className='MobileNavbar__menuLink'>
                <a className='Navbar__menu-link uppercase' href='#faq'>
                  Faq
                </a>
              </li>
            </div>
            <div className='MobileNavbar__social-links'>
              <a
                href='https://discord.gg/nZrsZGHBKF'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  alt=''
                  className='w-6 h-6 mr-8'
                  src='/static/media/discord.4b3001b1.svg'
                />
              </a>
              <a
                href='https://twitter.com/CryptoRats_NFT'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  alt=''
                  className='w-6 h-6 mr-8'
                  src='/static/media/twitter.07deeab3.svg'
                />
              </a>
              <a
                href='https://www.instagram.com/cryptorats'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  alt=''
                  className='w-6 h-6 mr-8'
                  src='/static/media/instagram.a11b1f0d.svg'
                />
              </a>
              <a
                href='https://vm.tiktok.com/TTPd2vptXE/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  alt=''
                  className='w-6 h-6'
                  src='/static/media/tiktok.073bec5a.svg'
                />
              </a>
            </div>
          </ul>
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
