import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #d2dbdc;
        --background-content: #EDEDED;
        --border: #DDD;
        --shape: #FFFFFF;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    //font-size: 16px (Desktop)
    html{ 
        @media (min-width:1000px) {
            font-size:93.75%; //15px
        }
        @media (min-width:720px) {
            font-size:87.5%; //14px
        }
    }
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        font-family: 'Segoe UI', Helvetica Neue, Helvetica, Lucida Grande, Arial, sans-serif;
    }
    body, input, textarea, button {
        font-family:'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
       font-weight: 600; 
    }
    button {
        cursor: pointer;
    }

    [disabled]{
        opacity:0.6;
        cursor: not-allowed;
    }
`;
