import Banner from "../../components/banner/Banner";
import banner from "../../assets/banners/about_banner.png";
import { Accordion } from "../../components/accordion/Accordion";
import "./About.css";
interface AccordionItem {
    title: string;
    description:string
}
export function About() {
    const accordionItems:AccordionItem[] = [{title:"Fiabilité", description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."},
    {title:"Respect", description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."},
    {title:"Service", description: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."},
    {title:"Sécurité", description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}] 
    return (
        <section className="ctnAbout">
            <Banner media={{img:banner, alt:"Bannière page à propos de kasa"}} />  
            {accordionItems.map((item, index) => {
                return <Accordion title={item.title} description={item.description} key={index}></Accordion>
            })}
        </section>
      
    )
}