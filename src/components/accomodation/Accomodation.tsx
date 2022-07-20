import React from 'react';
import { Link } from 'react-router-dom';
import './Accomodation.css'
interface Props {
  title:string,
  img:string,
  id:string;
}
function Accomodation(props:Props) {
  return (
    <section className='ctnAccomodation'>
        <Link className='accomodation' to={"/accomodation/" + props.id}>
            <img src={props.img} alt={props.title} />
            <div className='mask'></div>
            <section className='ctnTitle'>
                <h3>{props.title}</h3>
            </section>
        </Link>
    </section>
  );
}

export default Accomodation;
