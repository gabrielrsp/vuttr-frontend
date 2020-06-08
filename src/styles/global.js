import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';


import logoBackground from '../assets/logoBackground.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;

    border-radius: 4px;
    list-style-type: none;

    margin: 10px auto;

    @media (max-width: 1250px) {
      width: 99%;
      }

  }

  body {
    background: #f3f4f5 url(${logoBackground}) no-repeat top;
    background-position: 65% 90%;
    background-attachment: fixed;
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
