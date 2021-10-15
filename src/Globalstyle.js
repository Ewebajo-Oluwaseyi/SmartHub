import { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`
  
    body {
        margin: 0;
        padding: 0;
        font-family: lato, sans-serif;
        overflow-x:hidden;
    }

    a {
        text-decoration: none;
        color: #1f2c46;
    }
    ul,
    li {
      list-style-type: none;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    li {
      margin: 0;
      padding: 0;
    }

    .carousel {
      max-height: 85vh !important;
    }
    
    .carousel-inner .carousel-item {
      img {
        max-width: 1024px !important;
        height: auto !important;
        max-height: 100% !important;
        display: block !important;
        margin-top: 0 !important;
    
        @media (min-width: 1024px) {
          max-width: 100% !important;
        }
      }
    }
`