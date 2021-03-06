import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #fff;

    --text: #111;
    --red: #E53E3E;
    --orange-light: #F6AD55;
    --orange: #DD6B20;
    --orange-blue: #9C4221;
    --blue: #3182CE;
  }

  *{
    margin: 0px;
    padding: 0px;
    box-sizing:border-box;
  }

  html{
    @media(max-width: 1080px){
      font-size: 93.75%;
    }

    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
  }

  body{
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
