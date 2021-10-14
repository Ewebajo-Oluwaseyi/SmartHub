import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    bottom: 0;
    width: 100%;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    * {
        box-sizing: border-box;
    }

    footer {
        font-weight: 700;
        width: 100%;
        text-align: center;
        height: 80px;
        padding: 0 50px;
        border-top: 2px solid #ddd;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-top: 12rem;

        @media (min-width: 678px) {
            margin-top: 4rem;
          }
    }
`

export const Line = styled.div`
    width: 100vw;
    height: 1px;
    background-color: #d8d8d8;
`

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 10px;
    width: 100%;

  @media (min-width: 678px) {
    flex-direction: row;
    padding: 50px 50px;
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
`
export const SectionItem = styled.div`
    display: flex;
    flex-direction: column;
    color: #616161;
    width: 100%;
    margin-left: 2rem;
    line-height: 30px;

    @media (min-width: 1024px) {
        margin-left: 0;
    }
    h2 {
        font-size: .9rem;
        font-weight: 700;
        color: #333;
        letter-spacing: 1.2px;
        text-transform: uppercase;
        width: 100%

        @media (min-width: 1024px) {
            font-size: 1.1rem;
        }
    }

    div {
        h3 {
            font-size: .8rem;
            font-weight: 400;
            margin: 10px 0;

            @media only screen and (min-width: 1024px) {
                font-size: 1.2rem;
            }

        }
    }
`
export const Email = styled.div`
    padding: 10px;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 978px) {
        padding: 10px
    }

    h2 {
        font-size: .9rem;
        font-weight: 700;
        color: #333;
        letter-spacing: 1.2px;
        text-transform: uppercase;

        @media (min-width: 1024px) {
            font-size: 1.1rem
        }
    }
`

export const Form = styled.div`
    height: 44px;
    margin-top: 5px;
    min-width: 100%;
    align-items: center;
    justify-content: center;
    
    display {
        display: flex;
        flex-direction: columm;
    }
    >input {
        border: none;
        outline: none;
        background: #f4f5f7;
        min-height: 100%;
        width: calc(100% - 44px);
        padding: 0 10px;
        margin-button: 10px;

        &::placeholder {
            color: #616168;
            font-size: .9rem;
            font-weight: 300;
        }

        &:active,
        &:focus {
            border: 2px solid rgba(0, 0, 244, .4);
            border-radius: 5px 0 0 5px;
        }

    }
    > textarea {
        border: none;
        outline: none;
        background: #f4f5f7;
        min-height: 60%;
        width: calc(100% - 44px);
        margin-button: 20px;
        margin-top: 20px;
        padding: 20px;

        &::placeholder {
            color: #616168;
            font-size: .9rem;
            font-weight: 300;
        }
        &:focus {
            border: 2px solid rgba(0, 0, 244, .4);
            border-radius: 5px 0 0 5px;
        }
    }
    >button {
        padding: 10px;
        width: 40px;
        outline: none;
        border: none;
        background-color: blue;
        color: #fff;
        display: flex;
        
    }

    @media (min-width: 978px) {
        flex-flow: row;
    }

    @media (min-width: 1280px) {
        height: 50px;

        >input {
            padding: 0 20px
        }
    }
`

export const Text = styled.div`
  font-size: .8rem;
  padding: 20px;
  @media (min-width: 978px){
    font-size: 1rem
  }
`

export const Icons= styled.div`
 margin: auto;

 img {
    margin-right: 15px;
    height: 20px;
 }
 @media (min-width: 978px){
    margin: auto 0 auto auto;

    img {
        height: 30px;
    }
  }
`