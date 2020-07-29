import React from 'react';

import Button from '../Button';

import Logo from '../../assets/img/logo.png';
import './Header.css';

function Header() {
    return (
        <header>
            <nav className="Menu">
                <a href="/" title="Home">
                    <img src={Logo} alt="Logo Lo-Flix" className="Logo"/>
                </a>
                <Button className="ButtonLink" href="/">
                    Adicionar vídeo
                </Button>
            </nav>
        </header>
    );
}

export default Header;