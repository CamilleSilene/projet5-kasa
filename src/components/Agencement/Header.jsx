import * as React from "react";
import { NavLink } from 'react-router-dom'
import logoDesktopHeader from "../../assets/Desktop-Header.png"
 
function Header() {
    return (
        <header className="header">
        <NavLink to="/">
            <img src={logoDesktopHeader} alt="logo Kasa" className="header__logo" />
        </NavLink>
        <nav className="header__nav">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/apropos">À propos</NavLink>
        </nav>
        </header>
    )
}

export default Header