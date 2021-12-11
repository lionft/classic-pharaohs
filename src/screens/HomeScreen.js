import React from 'react';
import Club from '../components/Club';
import CommunityPerks from '../components/CommunityPerks';
import CountDown from '../components/CountDown';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import Founder from '../components/Founder';
import Header from '../components/Header';
import JoinSociety from '../components/JoinSociety';
import Navbar from '../components/Navbar';
import PreSale from '../components/PreSale';
import Roadmap from '../components/Roadmap';
import TheTeam from '../components/TheTeam';
import WelcomeClub from '../components/WelcomeClub';

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <Header />
      <CountDown />
      <Club />
      <JoinSociety />
      <PreSale />
      <WelcomeClub />
      <Roadmap />
      <Founder />
      <CommunityPerks />
      <TheTeam />
      <Faq />
      <Footer />
    </>
  );
};

export default HomeScreen;
