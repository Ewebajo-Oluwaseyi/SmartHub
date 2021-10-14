import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    padding: 20px;
    @media(min-width: 500px) {
        padding: 50px
    }

    @media(min-width: 978px) {
        padding: 30px 100px
    }
`

export const Match = styled.div`
    text-align: center;
    padding: 30px auto;
    margin: auto;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    width: 90%;
    text-transform: uppercase;
    font-weight: 600;
    font-family: lato, san-serif;
    color: #1f2c46;
    line-height: 30px;

    @media (min-width: 978px) {
        font-size: 2rem;
    }

    @media (min-width: 1280px) {
        font-size: 2rem;
        width: 80%;
        line-height: 35px;
    }
`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    background: #fefeff;
`

export const Item = styled.div`
    display: flex;
    grid-gap: 10px;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    justify-content: space-between;
    border-bottom: 1px solid rgba(51, 89, 223, 0.25);

    &:nth-child(2) {
        flex-direction: column-reverse;
    }
    &:nth-child(3) {
        border-bottom: none;

    }

    @media (min-width:978px) {
        flex-direction: row;
        grid-gap: 20px;
        margin-bottom: 20px;
        border-bottom: none;

        &:nth-child(2) {
            flex-direction: row;
        }
    }
    

`

export const Image= styled.div`
    width: 100%;
    height: 250px;

    @media (min-width: 500px) {
        width: 50%;
        height: 300px
        margin-left: 4rem;
    }
    @media (min-width:978px) {
        height: 300px;
    }
    @media (min-width: 1280px)  {
         height: 400px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;

        &:hover {
            opacity: .7;
        }
    }
`

export const Description = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-around;

    @media (min-width: 500px) {
       margin-left: 4rem;
    }
    
    h2 {
        font-size: 1.5rem;
        font-weight: 400;
        color: #1f2c46;
        text-transform: uppercase;
        margin-top: 2rem;

        @media (min-width: 1280px)  {
            margin-top: 0;
       }
    }

    p {
        font-size: 1rem;
        color: #565b73;
        line-height: 30px;
        margin-top: 3rem;
    }
    a {
        text-transform: uppercase;
        margin-top: 2rem;
        color: #1f2c46;
        font-weight: 500;
        margin-bottom: 1rem;
    }
`