import logoDesktopFooter from "../../assets/Desktop-Footer.png"


function Footer () {
    return (
        <footer className="footer text-tertiary">
        <img src={logoDesktopFooter} alt="logo Kasa" className="footer__logo" />
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>        
        </footer>
    )
}

export default Footer