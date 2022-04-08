import styled from 'styled-components';

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    height: 6rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #222;
`;

export const NavUL = styled.ul`
    height: 100%;
    width: 100%;
    max-width: 36rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const NavA = styled.a`
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: .1rem;
    padding: 0 3rem;
    color: #fff;
    transition: .25s ease-out;
    &:hover{
        cursor: pointer;
        color: lightblue;
    }
`;

export const LanguageContainer = styled.div`
    height: 100%;
    width: 14rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
export const Item = styled.button`
    color: lightblue;
    background: none;
    outline: none;
    border: none;
    transition: .25s ease-out;
    &:hover{
        cursor: pointer;
        color: #fff;
    }
`;