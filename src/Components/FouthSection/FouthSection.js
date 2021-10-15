import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    font-size: 17px;
    padding: 40px 0 40px;
    position: relative;
    background-image: url('image/bg01.jpg');
    z-index: 1;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    
    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0.5;
    }
    
`

export const Header = styled.div`
    font-size: 2rem;
    font-weight: 600;
    font-family: lato, san-serif;
    color: #ffffff;
    line-height: 30px;

    @media (min-width: 978px) {
        font-size: 2rem;
    }

    @media (min-width: 1280px) {
        font-size: 2rem;
        line-height: 35px;
    }
`
export const WrapperContent= styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media (min-width: 780px) {
        flex-direction: row; 
    }
`
export const InnerWrapper= styled.div`
    display: flex;
    flex-direction: row;
    padding: 30px;
    margin: 20px 30px;
    background-color: #ffffff;
    border-radius: 5px; 
    color: #555555;
`

export const Image = styled.div`
  //  padding-right: 70px;
    margin-right: 10px;
    img {
        border-radius: 50%;
    }
`

export const Testimonies= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h2 {
        margin-botton: 2rem;
    }
`

export const Stars= styled.ul`
    margin: 0 0 20px;
    li {
        display: inline-block;
        margin: 0 1px;
        
        i {
            color: #ff9800;
            font-size: 13px;  
        }
    }
`