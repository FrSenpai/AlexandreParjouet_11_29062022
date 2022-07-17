import React from 'react';
import { Link } from 'react-router-dom';
import './Accomodation.css'
interface Props {
  title:string
}
function Accomodation(props:Props) {
  return (
    <section className='ctnAccomodation'>
        <Link className='accomodation' to={"accomodation"}>
            <h3>{props.title}</h3>
        </Link>
    </section>
  );
}

export default Accomodation;
