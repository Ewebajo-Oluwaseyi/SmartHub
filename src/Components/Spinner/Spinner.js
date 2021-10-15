import styled from 'styled-components';


export const Loader = styled.div`
  .Loader {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background-color: #ccc;
    position: relative;
    top: 0;
    left: 0
 } 
  img {
    width: 160px;
    height: auto;
    -webkit-animation: loader 1.3s infinite linear;
    animation: loader 1.3s infinite linear;

}
`