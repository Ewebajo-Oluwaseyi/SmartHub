import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    position: relative;
    min-height: fit-content;
    margin-button: 0;
    background-image: url('image/homeBg1.jpg');
    z-index: 1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 80vh;
    @media (min-width: 1024px) {
      height: 85vh;
    }
`


export const Hero = styled.div`
    width: 90%;
    position: absolute; 
    top: 250px;
    left: 50%;
    transform: translate(-50%, -10%);
    padding: 20px;
    color: #fff;
    z-index: 9999;

    @media(min-width: 1024px) {
        width: 70%;
        text-align: start;
        padding: 80px;
        top: 50%;
        transform: translate(0, -40%);
        left: 0;
    }
`

export const Connect = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: capitalize;

  @media(min-width: 978px) {
    font-size: 2.5rem;
  }

  @media(min-width: 1280px) {
    font-size: 3.5rem;
  }
`

export const Button = styled.button`
    width: 150px;
    height: 40px;
    border-radius: 8px;
    background: #fff;
    color: #000;
    padding: 0 30px;
    outline: none;
    border: none;
    font-weight: 600;
    font-size: 1rem;
    margin-top: 30px;
    position: relative;
    letter-spacing: 1px;
    z-index: 1;
    span {
      width: 0;
      opacity: .7;
      transition: all .5s ease-out;
    }
    &:hover {
      color: #fff;
      background-color: transparent;
      span {
        z-index: -1;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        background-color: #000;
        opacity: 1;
      }
    }

    @media(min-width: 978px) {
      font-size: 1.1rem;
      width: 200px;
      height: 50px;
    }
`

