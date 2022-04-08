import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.h2`
    font-size: clamp(3rem, 5vw, 10rem);
    letter-spacing: clamp(.3rem, 2vw, 2rem);
    color: #222;
    text-transform: uppercase;
    margin: 2rem 0;
    color: #333;
`;

export const P = styled.p`
    font-size: clamp(2rem, 2vw, 4rem);
    letter-spacing: clamp(.1rem, 2vw, .7rem);
    color: #333;
    text-transform: capitalize;
    text-align: center;
    line-height: 1.4;
`;

export const Li = styled.li`
    text-transform: capitalize;
    font-size: 1.4rem;
    letter-spacing: .1rem;
    color: #333;
    line-height: 1.4;
`;