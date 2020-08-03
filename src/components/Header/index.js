import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import Button from '../Button';
import useDocumentScrollThrottled from './useDocumentScrollThrottled';

import Logo from '../../assets/img/logo.png';
import './Header.css';

function Header() {

    const [headerTransparent, setHeaderTransparent] = useState(false);

    useDocumentScrollThrottled(callbackData => {
        const { currentScrollTop } = callbackData;
        setHeaderTransparent(currentScrollTop > 100);

    });

    const headerFixed = headerTransparent ? 'fixed' : '';

    return (
        <header>
            <nav className={`Menu ${headerFixed}`}>
                <Link to="/" title="Home">
                    <img src={Logo} alt="Logo Lo-Flix" className="Logo" />
                </Link>
                <Button as={Link} style={{backgroundColor:"var(--primary)"}} className="ButtonLink" to="/cadastro/video">
                    Adicionar vídeo
                </Button>
            </nav>
        </header>
    );
}

export default Header;