import styled from 'styled-components';


export const Container = styled.div`
  max-width: 600px;
  margin: 0 10px;

  h1 {
    color: #f26532;
    margin-top: 5px;
    width: 100%;
  }

  .logoLeft{
    display: flex;
    margin-right: auto;
  }

  .title{
    display: flex;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;


    input{
      background: rgba(0, 0, 0, 0.3);
      color: #fff;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 15px;
      margin: 5px 0 8px;
      font-size: 15px;

      &:focus {
      border: 1px solid #f26532;
      margin: 4px -1 7px;
      }

    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(119,119,119,0.9);
      margin: 10px 0;
    }

    button {
      height: 44px;
      background: #1fcc6f;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: #179b55;
      }

      &:active {
          background: #148549;
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
        margin-left: 5px;
      }
    }
  }

    button {

      width: 100%;
      margin-top: 10px;
      height: 44px;
      background: #FF4B5D;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      cursor:pointer;

      span {
        margin-top: 2px;
      }

      &:hover {
        background: #CC4C4C;
      }

      &:active {
          background: #A53F3F;
      }
    }

`;
