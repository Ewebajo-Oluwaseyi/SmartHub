import styled from 'styled-components';

export const Wrapper = styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    position: fixed;
    top: 0;
    z-index: 2000;
    transition: all .6s ease;
    bottom: ${props => props.scroll ? "0" : ""};
    background-color: ${props => props.scroll ? "rgba(255, 255, 255, .5)" : ""};
    backdrop-filter: ${props => props.scroll ? "blur(20px)" : ""};
    box-shadow: ${props => props.scroll ? "3px 0 10px rgba(0, 0, 0, .3)" : ""};


    @media only screen and (min-width: 768px) {
        padding: 30px 50px;
    }

    @media only screen and (min-width: 1280px) {
        padding: 30px 60px;
    }
`
/*border: ${props => props.scroll ? "5px solid rgba(0, 0, 0, .1)" : ""};
    background-color: ${props => props.scroll ? "rgba(255, 255, 255, .5)" : "#fff"};
    backdrop-filter: ${props => props.scroll ? "blur(20px)" : ""};
    box-shadow: ${props => props.scroll ? "3px 0 10px rgba(0, 0, 0, .3)" : ""}; */
export const LeftNavbar = styled.div`
    display: flex;
    width: 20%;
    align-items: center;

    h2 {
        font-size: 20px;
        color: #182039;
        text-shadow: 2px 2px #ffffff;
        font-weight: 400;
        line-height: 30px;

        @media (min-width: 500px) {
            width: 40%;
            font-size: 30px;
        }
    }

`

export const RightNavbar = styled.div`
    display: none;
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translateY(-40%);



    @media only screen and (min-width: 1024px) {
        display: block;
    }

    @media only screen and (min-width: 1280px) {
     display: block;
     right: 100px
    }

    >button {
        color: #1f2c46;
        padding: 15px;
        height: 40px;
        border-radius: 6px;
        font-weight: 500;
        outline: none;
        border: none;
        background-color: #ffaf30;
        font-size: 1rem;
        display: inline-flex;
        align-items: center;
        margin-left: 10px;
        transition: all .2s ease-in;

        &:hover {
            color: #ffffff;
        }

        &:last-child {
            background-color: #010101;
            color: #fff;
            margin-left: 2rem;

            border: 1px solid #000;

            &:hover {
                background-color: rgba(255, 255, 255, .5);
                color: #000;
            }

        }
    }

`

/*export const Mobile= styled.div`

`*/


export const Search = styled.div`
    width: 150px;
    max-width: 30%;
    height: 34px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    margin-right: 20px;

    @media only screen and (min-width: 400px) {
      width: 200px;
    }
    @media only screen and (min-width: 768px) {
     width: 250px;
     height: 40px;
    }

    @media only screen and (min-width: 1280px) {
      width: 350px;
      height: 46px;
    }

    input {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      outline: none;
      border: none;
      box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.1);
      font-size: 1.1rem;
      padding: 0 20px;
      background-color: rgba(255, 255, 255, .9);


      &::placeholder {
        color: #555;
        font-size: .8rem;
      }

     &:focus {
        border: 3px solid rgba(73, 130, 255, .5);
        box-shadow: none;
     }
}
`

export const Drop = styled.div`
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-40%);

    @media only screen and (min-width: 1024px) {
       display: none;
    }

    i {
        height: max-content;
        padding: 0;
        font-size: 2rem;
        font-weight: 900;
        color: #fff;

        svg {
            height: 34px;
        }
    }
`
export const DropContent = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    margin: 0;
    margin-right: 2rem;
    padding: 10px;
    width: 100%;
    @media only screen and (min-width: 1024px) {
        display: none;
     }
    > div:nth-child(1) {
        margin-bottom: 10px;
        color: #1f2c46;
        padding: 10px;
        width: 100%
        margin-right: 5px;
    }
    > div:nth-child(2) {
        padding: 10px;
        width: 100%
        margin-right: 5px;
    } 
`
export const Profile = styled.div`
    color: black !important;
    margin-right: 20px;
    display: flex;

    button {
        background-color: transparent;
        border: none;
        border-color: transparent;
        outline: none;
        padding: 10px 0;

        a {
            text-decoration: none;
            color: #222;
        }
    }
     i {
         color: #fff;
         margin-top: 10px;
         font-size: 30px;
     }

`
