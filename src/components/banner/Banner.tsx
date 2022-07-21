import React from 'react';
import './Banner.css'
interface Media {
  img:string,
  alt:string
}
interface Props {
    media:Media
    text?:string,
    slider?:boolean
}
function Banner(props:Props) {
  return (
    <section className='ctnBanner'>
      <img src={props.media.img} alt={props.media.alt} />
      {props.text ? renderBannerTitle(props.text) : null}
    </section>
  );
}

function renderBannerTitle(title:string) {
  return (
    <h2>{title}</h2>
  )
}

export default Banner;
