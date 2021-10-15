import styled from 'styled-components';


export const User = styled.div`
    font-size: 1.1rem;
    font-weight: 500;
    padding: 0 20px;
    margin-top: 20px;
    text-align: center;
    color: #222;

    span {
      color: #1f2c46;
      font-size: 1.2rem;
      font-weight: 700;
      letter-spacing: 1px;
      cursor: pointer;
    }

`
export const Button= styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    border: none;
    background-color: #ffaf30;
    font-size: 1.1rem;
    font-weight: 500;
    align-items: center;
    height: 30px;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
`

export const Head = styled.h2`
    display: flex;
    justify-content: center;
    aligns-item: center;
    font-size: 20px;
    color: #182039;
    text-shadow: 2px 2px #1f2c46;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 1rem;

    @media (min-width: 500px) {
        font-size: 30px;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 500px) {
        flex-direction: row;
    }
`

export const Col = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0px 10px;
    &:nth-child(1) {
        margin-bottom: 1rem;
    }
`