import styled from 'styled-components';

export const ModalWrapper = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    top: -100vh;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    z-index: 5000;
    transition: all 0.4s ease;
    overflow-x: hidden;
    overflow-y: scroll; 
     bottom: ${props => props.show ? "0" : ""};
    top: ${props => props.show ? "0" : ""};
`

export const Wrapper= styled.div`
    position: absolute;
    margin-top: 50vh;
    margin-left: 50vw;
    transform: translate(-50%, -50%);
    width: 600px;
    max-width: 85vw;
    max-height: fit-content;
    min-height: 00px;
    background-color: #fff;
    padding: 20px;
    padding-bottom: 50px;
    border-radius: 15px;
    z-index: 5000;

    @media only screen and (max-width: 380px) {
      max-width: 90vw !important;
    }

    @media (min-width: 678px) {
      max-width: 70vw;
      padding: 50px;
    }

    > span {
        position: absolute;
        font-size: 20px;
        top: 10px;
        right: 20px;
        color: #000;
      }
  
      > form {
        @media (min-width: 978px) {
          input,
          .form-control {
              margin-top: 10px;
            height: 30px;
          }
        }
        input {
            padding: 5px;
            border-radius: 10px;
            margin-left: 10px;
            border: 1px solid #000;
        }
        .form-row {
          margin-top: 20px;
        }
      }
`