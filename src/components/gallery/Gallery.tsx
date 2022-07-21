import { useState } from "react";
import "./Gallery.css";
import leftArrow from "../../assets/gallery/arrow_left.png";
import rightArrow from "../../assets/gallery/arrow_right.png";
interface Props {
    medias: Array<string>;
}

export function Gallery(props: Props) {
    const [activeMedia, setActiveMedia] = useState(0);
    const handleArrowClick = (polarity: boolean) => {
        if (polarity) {
            if (activeMedia + 1 < props.medias.length) {
                setActiveMedia(activeMedia + 1);
            } else {
                setActiveMedia(0);
            }
        } else {
            if (activeMedia - 1 >= 0) {
                setActiveMedia(activeMedia - 1);
            } else {
                setActiveMedia(props.medias.length - 1);
            }
        }
    }

    return (
        <section className="ctnGallery">
            <img className={"activeMedia"} src={props.medias[activeMedia]} alt={"Image de la galerie présentant l'hébergement"} />
            <img onClick={() => handleArrowClick(false)} className="arrows" hidden={props.medias.length === 1} src={leftArrow} alt="Flèche gauche pour passer à l'image précédente" />
            <p>{activeMedia + 1 + "/" + props.medias.length}</p>
            <img onClick={() => handleArrowClick(true)} className="arrows" hidden={props.medias.length === 1} src={rightArrow} alt="Flèche droite pour passer à l'image suivante" />
        </section>
    )
}