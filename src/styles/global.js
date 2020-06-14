import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';


import logoBackground from '../assets/logoBackground.svg';
import logoProfile from '../assets/logoProfile.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100%;
    border-radius: 4px;
    list-style-type: none;
    margin: auto;
    -webkit-font-smoothing: antialiased !important;
    background: #cccccc url(${logoBackground}) no-repeat top;
    background-position: 66% 95%;
    background-attachment: fixed;

    @media(max-width: 600px ) {
    background-size: 90%;
    background-position: 50% 90%;
    }

    #auth {
    text-align: -webkit-center ;
    background: #4d4d4d ;
    height: 999px;
    margin: 0;
    }

    #profile {
    text-align: -webkit-center ;
    background: #4d4d4d url(${logoProfile}) no-repeat top;
    background-position: 66% 95%;
    background-attachment: fixed;
    height: 999px;
    padding-top: 50px;
    }
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
