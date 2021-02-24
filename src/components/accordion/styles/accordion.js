import styled from 'styled-components';


export const Frame = styled.div`
    margin-bottom: 40px;
    max-width: 1200px;

    @media (max-width: 600px) {
        max-width: 600px;
    }
`;

export const Container = styled.section`
    display: flex;
    border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
    display: flex;
    padding: 70px 45px;
    flex-direction: column;
    max-width: 815px;
    margin: auto;
`;

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 8px;
    color: white;
    text-align: center;

    @media (max-width: 600px){
        font-size: 35px;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 26px;
    font-weight: normal;
    padding: 0.8em 1.2em;
    user-select: none;
    align-items: center;
    background: #303030;
    width: 100%;
    border-box: box-sizing;

    img {
        filter: brightness(0) invert(1);
        width: 24px;
        
        @media (max-width: 600px) {
            width: 16px;
        }
    }
    
    @media (max-width: 600px) {
        font-size: 16px;
    }
`;

export const Body = styled.section`
    max-width: 1200px;
    font-size: 26px;
    font-weight: normal;
    line-height: normal;
    padding: 0.8em 1.2em;
    user-select: none;
    align-items: center;
    background: #303030;
    width: 100%;
    border-box: box-sizing;

    @media (max-width: 600px){
        font-size: 16px;
        line-height: 22px;
    }
`;

export const Item = styled.section`
    color: white;
    margin-bottom: 10px;

    &:first-of-type {
        margin-top: 3em;
    }
`;