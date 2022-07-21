import React from "react";
import "./Home.css";
import Banner from "./../../components/banner/Banner";
import imgBanner from "../../assets/banners/home_banner.png";
import Accomodations from './../accomodations/Accomodations';
function Home() {
  return (
    <section>
      <Banner
        media={{ img: imgBanner, alt: "Bannière home page kasa" }}
        text={"Chez vous, partout et ailleurs"}
      ></Banner>

      <Accomodations/>
    </section>
  );
}

export default Home;
