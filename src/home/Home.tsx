import React from 'react';
import './Home.css';
import Banner from './../components/banner/Banner';
import imgBanner from '../assets/banners/home_banner.png'
function Home() {
  return (
    <section className="ctnBanner">
      <Banner img={imgBanner} alt={"Bannière home page kasa"}></Banner>
    </section>
  );
}

export default Home;
