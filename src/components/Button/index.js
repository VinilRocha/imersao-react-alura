import styled from 'styled-components';

const Button = styled.a`
    color: var(--black);
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
    font-size: 14px;
    font-weight: bold;
    background-color: var(--primary);
    backface-visibility: hidden;

    &:hover,
    &:focus {
        background-color: var(--purple-3);
        transform: translateY(-.1em);
    }

    @media (max-width: 800px){
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--primary);
        border-radius: 0;
        border: 0;
        text-align: center;
    }
`;

export default Button;
