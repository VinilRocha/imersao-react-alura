import styled from 'styled-components';

const Button = styled.a`
    color: var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 8px 24px;
    font-style: normal;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: all .5s;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    background-color: ${({ backgroundColor }) => `${backgroundColor}`};
    backface-visibility: hidden;

    &:hover,
    &:focus {
        background-color: var(--pink-1) !important;
        transform: translateY(-.1em);
    }

    @media (max-width: 800px){
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--pink-2);
        border-radius: 0;
        border: 0;
        text-align: center;
        font-size: .9em;
        padding: 1em;
        box-shadow:0px -5px 14px 2px rgb(0 0 0 / 28%);
    }
`;

export default Button;
