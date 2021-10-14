import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-top: 2rem;
  width: 100%;
  padding: 20px;
  gap: 20px;
    border-top: 1px solid rgba(51, 89, 223, 0.25);
    // border-bottom: 1px solid rgba(51, 89, 223, 0.25);
   
   @media(min-width: 978px) {
    width: 75%;
    flex-direction: row;
    gap: 0;
  }
`

export const Global = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  padding: 10px 20px;
  
  @media(min-width: 978px) {
    margin-left: 5rem;
  }
  > div {
    font-size: 1.5rem;
    color: #3359df;

    @media(min-width: 978px) {
      font-size: 2rem;
    }

    p {
        font-size: 22px;
        font-weight: 400;
        font-family: lato, san-serif;
    }
 }
`

export const Hire = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    background-color: #3359df;
    color: #fff;
    padding: 15px 60px 15px 60px;
  }
`