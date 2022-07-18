import logo from "../../assets/Logo_Kasa_white.png"
import "./Footer.css"
export function Footer() {
    return (
        <footer>
            <img src={logo} alt="Logo blanc footer" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}