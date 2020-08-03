import React from 'react';

import Header from '../Header'
import Footer from '../Footer'
import styled from 'styled-components';

const Main = styled.main`
    color: var(--white);
    flex: 1;
    padding-top: 5em;
    padding-left: 5%;
    padding-right: 5%;
`;

function PageDefault({ children }) {
    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}

export default PageDefault;