import styled, { keyframes } from 'styled-components';

const appearEffect = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 1;
  flex-direction: column;

  .deleteBox {
    width: 700px;
  }
`;

export const Modal = styled.div`
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
    align-self: flex-start !important;
    align-items: center;
    margin: 20px ;
  }

  .button {
    display: flex;
    justify-content: space-between;
    align-self: flex-end !important ;
  }

  .deleteButton {
    background: #F95E5A;
    margin-bottom: 8px;
    margin-left: 20px;
    margin-right: 0;

    &:hover {
      background: #CC4C4C;
    }
    &:active {
      background: #A53F3F;
    }
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
    margin-bottom: 10px;
    margin-top: 10px;
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
    margin-top: 10px;
    margin-bottom: 15px;
    resize: none;

    &::placeholder {
      font-size: 14px;
      }
  }
`;

export const Container = styled.div`

  div {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
`;


export const Header = styled.div`
  display: flex;
  background: #4d4d4d;

  position: fixed;
  width: 100%;
  height: 300px;
  margin: auto;
  justify-content: center !important;
  top: 0;


  img {
      border-radius: 5px;
      align-self: flex-start;
    }


  div {
    margin-top: 10px;
    width: 1200px;
    display: block;
    align-content: center;
    align-items: center;
    align-self: center;
  }

  .flex {
    display: flex;
    justify-content: left;
    margin-bottom: 25px;

    span {
    color: #fff;
    font-weight: bold;
    }
  }


  .header {
    margin-bottom: 43px;
  }


  .profile{
    text-align-last: end;
    align-self: flex-start;
    text-align: right;
    margin-right: 10px;

      strong {
        color: #f26532;
        display:block;
        font-size: 18px;
      }

      a {
        text-decoration: none;
        margin-top: 2px;
        font-size: 16px;
        color: #fff;
        font-weight: bold;
        display:block;

        &:hover {
          color: #179b55;
        }

        &:active {
          color: #148549;
        }
      }
  }

  .contents {
    display: contents;
    justify-content: left;
    span {
      font-size: 18px;
      color: #f26532;
    }

  }

  .but {
    display:flex;
    justify-content: flex-end !important;
    align-self: flex-end !important;
    text-align: -webkit-right;
  }

  .block {
    display: block;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 36px;
    color: #fff;
  }
  h3 {
    font-size: 28px;
    color: #fff;
    position: fixed;
  }
`;

export const CheckBoxInput = styled.input`
  width: 20px;
  height: 20px;
  padding-left: 5px;
  margin-left: 10px;
  margin-right: 5px;
  background: #EBEAED 0% 0% no-repeat padding-box;
  border: 1px solid #fff;
  border-radius: 5px;
  opacity: 1;
`;


export const SearchInput = styled.input`
  height: 50px;
  width: 403px;
  padding-left: 5px;
  margin-left: 10px;
  margin-right: 5px;
  background: #fff;
  background: rgba(0, 0, 0, 0.27);
  color: #fff;
  border: 0;
  border-radius: 5px;
  opacity: 1;
  font-size: 20px;

`;

export const ToolList = styled.ul`
  width: 1200px;
  border-radius: 4px;
  list-style-type: none;
  margin: 10px auto;
  margin-top: 315px;

  @media (max-width: 1250px) {
    width: 99%;
  }

  li {
  display: block;
  flex: 1;
  width: 100%;
  padding: 0px 15px;
  padding-bottom: 20px;
  margin: 20px auto;
  background: rgba(243,243,243,0.72);
  border: 0;
  border-radius: 4px;
  justify-content:center;

    a {
      padding-top: 10px;
      font-size: 30px;
      margin-bottom: 10px;
      color: #f26532;
    }

    p {
      margin-bottom: 15px;
      font-size: 20px;
    }

    strong {
      margin-bottom: 15px;
      font-size: 18px;
    }
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: flex-end;
  align-self: center !important;
  margin-left: auto !important;
  font-weight: bold;
  font-size: 20px;
  border: 0;
  border-radius: 5px;
  color: #fff;
  background: #1fcc6f;
  padding: 5px 10px;
  margin-left: 10px;


  &:hover {
    background: #10B26C;
  }

  &:active {
      background: #0E995D;
  }

  span {
      flex: 1;
      text-align: center;
      font-weight: bold;
      margin-left: 5px;

    }
`;

export const DeleteButton = styled.div`
  color: #F95E5A;
  margin-top: 15px;
  font-weight: bold;
  font-size: 20px;


  span {
    margin-top: 2px;
  }
  &:hover {
    color: #CC4C4C;
  }

  &:active {
      color: #A53F3F;
  }
  cursor:pointer;
`;


