import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 40px;
  background: #182039;
  @media (min-width: 500px)  {
      display: flex;
      width: 100%;
      flex-direction: row;
      box-sizing: border-box;
  }
`

export const Message = styled.div`
    color: #fff;
    margin: 10px;
    font-size: 16px;
    font-weight: 400;
`

export const Read = styled.div`
    padding: 10px 15px;
    margin: 10px;
   // width: 25%;
   button {
        background-color: #fff;
        padding: 15px 10px 15px 10px;

        
        @media (min-width: 257px)  {
            padding: 15px 10px 15px 10px;
        }

        @media (min-width: 338px)  {
            padding: 15px 30px 15px 30px;
        }
      }
      
`