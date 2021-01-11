import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import './styles.scss'

const Navbar = () => {
    const [mobileMenuActive, setMobileMenuActive] = useState(false)

    const handleClickMobileMenu = () => setMobileMenuActive(!mobileMenuActive)

    return (
        <header className="header-container">
            <h1 className="logo">HUB EWZ</h1>

            <div className="mobile-menu" onClick={handleClickMobileMenu}>
                {mobileMenuActive ? <FaTimes /> : <FaBars />}
            </div>

            <nav
                className="nav-container"
                style={{ right: mobileMenuActive ? '0' : '-999px' }}
            >
                <ul>
                    <li>Home</li>
                    <li>Coldcall</li>
                    <li>Produtos</li>
                    <li>Renda Váriavel</li>
                    <li>IP</li>
                    <li>Câmbio</li>
                    <li>Guru</li>
                    <li className="optional-item">
                        <input type="checkbox" />
                        <p>Operacional</p>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
