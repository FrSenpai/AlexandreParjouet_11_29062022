import React from 'react';
import './Home.css';
import Banner from './../components/banner/Banner';
import imgBanner from '../assets/banners/home_banner.png'
function Home() {
  return (
    <section>
      <Banner media={{img:imgBanner, alt:"Bannière home page kasa"}} text={"Chez vous, partout et ailleurs"}></Banner>
    </section>
  );
}

export default Home;
