import React from 'react';
import './Banner.css'
interface Props {
    img: string,
    alt:string
}
function Banner(props:Props) {
  return (
        <img className='bannerImg' src={props.img} alt={props.alt} />

    
  );
}

export default Banner;
