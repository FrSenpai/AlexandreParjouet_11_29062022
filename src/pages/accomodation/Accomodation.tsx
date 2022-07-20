import { useParams } from "react-router-dom";
import { Gallery } from "../../components/gallery/Gallery";
import { IAccomodation } from "../../models/Accomodation";
import { getAccomodations } from "../../services/AccomodationsService";
import "./Accomodation.css";
export function Accomodation() {
    const accomodationId = useParams()
    const accomodation: IAccomodation[] = getAccomodations(accomodationId)
    console.log(accomodation)
    return (
        <section className="ctnAccomodationItem">
            <Gallery medias={accomodation[0].pictures}></Gallery>
        </section>
    );
}