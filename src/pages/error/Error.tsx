import React from 'react';
import { Link } from 'react-router-dom';
import "./Error.css";
function Error(props:any) {

  return (
    <section className='ctnError'>
      <h2 className='primaryColor errorTitle'>404</h2>
      <p className='primaryColor errorContent'>Oups! La page que vous demandez n'existe pas.</p>

      <Link className='primaryColor' to={"home"}>Retourner sur la page d'accueil</Link>
    </section>
  );
}

export default Error;
