import { useParams } from "react-router-dom";
import { Gallery } from "../../components/gallery/Gallery";
import { IAccomodation } from "../../models/Accomodation";
import { getAccomodations } from "../../services/AccomodationsService";
import "./Accomodation.css";
import grayStar from "../../assets/accomodation/star_gray.png";
import redStar from "../../assets/accomodation/star_red.png";
import { Accordion } from "../../components/accordion/Accordion";
export function Accomodation() {
    const accomodationId = useParams()
    const accomodation: IAccomodation = getAccomodations(accomodationId)[0]
    if (accomodation === undefined) window.location.href = "/error"
        
    return (
        <section className="ctnAccomodationItem">
            <Gallery medias={accomodation.pictures}></Gallery>
            <section className="ctnRowContent">
                <section className="ctnTitleAccomodation">
                    <h2>{accomodation.title}</h2>
                    <h3>{accomodation.location}</h3>
                    <ul className="tagsList">
                        {accomodation.tags.map((tag: string, index: number) => {
                            return <li key={index}>{tag}</li>
                        })}
                    </ul>
                </section>
                <section className="ctnHostAndNotation">
                    <section className="ctnHostContent">
                        <h4>{accomodation.host.name.split(" ")[0]} <br /> {accomodation.host.name.split(" ")[1]}</h4>
                        <img src={accomodation.host.picture} alt={"Image de l'hôte :" + accomodation.host.name} />
                    </section>
                    <ul className="ctnStars">
                        {[0, 1, 2, 3, 4].map((star: number, index: number) => {
                            return <li className="star" key={index}>
                                <img src={index < Number(accomodation.rating) ? redStar : grayStar} alt="Etoile de notation" />
                            </li>
                        })}
                    </ul>
                </section>

            </section>
            <section className="ctnAccordionAccomodationItem">
                <section className="accordionItem">
                    <Accordion fontSize="small" title="Description" description={accomodation.description}></Accordion>
                </section>
                <section className="accordionItem atEnd">
                    <Accordion fontSize="small" title="Équipements" description={accomodation.equipments}></Accordion>
                </section>
            </section>

        </section>
    );
}