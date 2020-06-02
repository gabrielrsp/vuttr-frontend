import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;

    width: 1200px;
    border-radius: 4px;
    list-style-type: none;

    margin: 10px auto;

    @media (max-width: 1250px) {
      width: 99%;
      }

  }

  body {
    background: #F5F4F6 0% 0% no-repeat padding-box;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

`;
