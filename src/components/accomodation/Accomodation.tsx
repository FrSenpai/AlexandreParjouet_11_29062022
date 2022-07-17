import React from 'react';
import { Link } from 'react-router-dom';
import './Accomodation.css'
interface Media {
  img:string,
  alt:string
}
interface Props {
    title:string
}
function Accomodation(props:Props) {
  return (
    <section className='ctnAccomodation'>
        <Link className='accomodation' to={"accomodation"}>
            
        </Link>
    </section>
  );
}

export default Accomodation;
