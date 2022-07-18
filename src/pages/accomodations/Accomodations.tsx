import './Accomodations.css'
import React from 'react';
import { getAccomodations } from "../../services/AccomodationsService";
import Accomodation from "../../components/accomodation/Accomodation";
const accomodations = getAccomodations({});
function Accomodations(props:any) {

  return (
    <section className="ctnAccomodations">
    {accomodations.map((a: any, index: number) => {
      return <Accomodation key={index} img={a.cover} title={a.title} />;
    })}
  </section>
  );
}

export default Accomodations;
