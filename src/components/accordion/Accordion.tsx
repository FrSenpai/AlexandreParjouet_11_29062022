import React, { useState } from "react";
import "./Accordion.css";
import bottomArrow from "../../assets/accordion/arrow_bottom.png";
import upperArrow from "../../assets/accordion/arrow_up.png";
import { replaceAll } from "../../utils/replaceAll";
interface Props {
    title:string,
    description:string |string[],
    fontSize: "small" | "large",
}
export function Accordion(props:Props) {
    const [isOpen, setOpenState] = useState(false);
    const renderDescription = () => {
        if (typeof props.description === "string") {
            return <p>{props.description}</p>;
        } else {
            return (
                <ul className="ctnGear">
                    {props.description.map((item, index) => {
                        return <li>{item}</li>
                    })}
                </ul>
            )
        }
    }
    return (
        <section className={props.fontSize !== "small" ? "ctnAccordion" : "ctnAccordion fullWidth"}>
            <section className="ctnHeadBar">
                <h3 className={props.fontSize === "small" ? "lowSizeTitle" : undefined}>{props.title}</h3>
                <img onClick={() => setOpenState(!isOpen)} src={isOpen ? upperArrow : bottomArrow} alt="Flèche d'ouverture ou de fermeture du menu accordéon" />
            </section> 
            <section className={isOpen ? "ctnDescription active" : "ctnDescription"}>
                {renderDescription()}
            </section>
        </section>
    )
}
