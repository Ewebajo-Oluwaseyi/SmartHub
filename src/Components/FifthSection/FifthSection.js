import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    margin-top: 2rem;
    width: 70%;
`

export const Skill = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 2rem;

    @media(min-width: 978px) {
        flex-direction: row;
    }
`

export const SkillContent = styled.div`
    padding: 2px;
    margin: 10px;
    margin-top: 1rem;
  p {
    margin-top: 1rem;
    color: #565b73;
    font-weight: 300;
    line-height: 30px;
  } 
`

export const Community = styled.div`
    font-size: 2rem;
    font-weight: 600;
    font-family: lato, san-serif;
    color: #1f2c46;
    line-height: 30px;
    width: 100%;

    @media (min-width: 978px) {
        font-size: 2rem;
    }

    @media (min-width: 1280px) {
        font-size: 2rem;
        width: 100%;
        line-height: 35px;
    }
`

export const Image = styled.div`
    img {
        width: 300px;
    }
    @media (min-width: 500px)  {
        margin-right: 5rem;

        img {
            width: 471px;
        }
    }
`

export const Head= styled.div`
    font-size: 24px;
    font-weight: 400;
    color: #1f2c46;
`