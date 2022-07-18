import React, { useState } from "react";
import "./Accordion.css";
import bottomArrow from "../../assets/accordion/arrow_bottom.png";
import upperArrow from "../../assets/accordion/arrow_up.png";
interface Props {
    title:string,
    description:string
}
export function Accordion(props:Props) {
    const [isOpen, setOpenState] = useState(false);
    return (
        <section className="ctnAccordion">
            <section className="ctnHeadBar">
                <h3>{props.title}</h3>
                <img onClick={() => setOpenState(!isOpen)} src={isOpen ? upperArrow : bottomArrow} alt="Flèche d'ouverture ou de fermeture du menu accordéon" />
            </section> 
            <section className={isOpen ? "ctnDescription active" : "ctnDescription"}>
                <p>{props.description}</p>
            </section>
        </section>
    )
}