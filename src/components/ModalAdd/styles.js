import styled, { keyframes } from 'styled-components';

const appearEffect = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const AddForm = styled.form`

@media(max-width: 900px ) {
  width: 100%;
  height: 75%;
  margin: 0 !important;
  .title {
    margin-left: 20px !important;
  }
 }

  animation: ${appearEffect} 0.3s;
  display: flex;
  align-items: center;
  align-self: center;
  flex-direction: column;
  background-color: #4d4d4d;
  z-index: 2;
  width: 900px;
  border-radius: 5px;
  margin-top: 100px !important;

  div {
    display: flex;
    align-self: flex-start !important;
    align-items: center;
    margin: 20px ;
  }

  .button {
    display: flex;
    justify-content: space-between;
    align-self: flex-end !important ;
    margin: 20px 20px 10px;
  }

  .addButton {
    background: #1fcc6f;
    margin-bottom: 8px;
    margin-left: 20px;
    margin-right: 0;

    &:hover {
      background: #179b55;
    }
    &:active {
      background: #148549;
    }
  }

  button {
    align-self: flex-end;
    margin : 20px 45px 40px;
    align-items: center;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    background: #1fcc6f;
    border: 0;
    padding: 5px 10px;
    border-radius: 5px;
    display: flex;

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
    }
  }

  input {
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    font-size: 15px;
    border: 0;
    border-radius: 4px;
    resize: vertical;
    width: 90%;
    height: 30px;
    padding: 18px;
    margin: 10px;

    &:focus {
      border: 1px solid #1fcc6f;
      margin: 9px;
    }
  }

  .title {
    align-self: flex-start ;
    margin-left: 45px;
  }

  h4 {
    font-size: 19px;
    margin-top: 15px;
    color: #fff;
  }

  h3 {
    font-size: 23px;
    margin-top: 20px;
    color: #fff;
  }

  h2 {
    margin-top: 5px;
    margin-left: 5px;
    font-size: 25px;
    color: #fff;
  }

  textarea {
    background: rgba(0, 0, 0, 0.3);
    font-size: 14px;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 10px 15px 60px 10px;
    width: 90%;
    height: 200px;
    margin: 9px;
    resize: none;

    &:focus {
      border: 1px solid #1fcc6f;
      margin: 9px;
    }

    &::placeholder {
      font-size: 14px;
    }
  }

`;
