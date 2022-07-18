import Banner from "../../components/banner/Banner";
import banner from "../../assets/banners/about_banner.png";
export function About() {
    return (
        <section>
            <Banner media={{img:banner, alt:"Bannière page à propos de kasa"}} />  
        </section>
      
    )
}