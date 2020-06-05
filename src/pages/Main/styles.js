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
`;

export const Modal = styled.div`
  animation: ${appearEffect} 0.3s;
  display: flex;
  align-items: center;
  align-self: center;
  flex-direction: column;
  background-color: #fff;
  z-index: 2;
  width: 900px;
  border-radius: 5px;
  margin-top: 100px !important;

  div {
    align-self: flex-start !important;
    align-items: center;
    margin: 20px ;
  }

  .deleteBox {
    height: 350px;
  }

  .button {
    display: flex;
    justify-content: space-between;
    align-self: flex-end !important ;
  }

  .deleteButton {
    background: #F95E5A;
    margin: 10px;

    &:hover {
      background: #CC4C4C;
    }

    &:active {
      background: #A53F3F;
    }
  }

  button {
    align-self: flex-end;
    margin : 20px 45px 40px;
    align-items: center;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    background: #12DB89;
    border: 0;
    padding: 5px 10px;
    border-radius: 5px;
    display: flex;

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
        margin-left: 8px;
    }

  }

  input {
    background: rgba(0, 0, 0, 0.1);
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
  }

  h3 {
    font-size: 23px;
    margin-top: 20px;
  }

  h2 {
    margin-top: 5px;
    margin-left: 5px;
    font-size: 25px;
  }

  textarea {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    padding: 10px 15px 60px 10px;
    width: 90%;
    height: 200px;
    margin-top: 10px;
    margin-bottom: 15px;
    resize: none;
  }
`;

export const Container = styled.div`
  div {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Header = styled.div`
  div {
    margin-top: 100px;
    display: block;
    justify-content: space-between;
  }

  h1 {
    font-size: 36px;
  }
  h3 {
    font-size: 28px;
  }
`;

export const ControlBar = styled.div`
  margin: 0 3px;
  display: flex;

  div {
    align-items: center;
    align-self: center;
  }

  span {
    font-size: 20px;
    font-weight: bold;
    margin-right: 5px;
  }

`;

export const CheckBoxInput = styled.input`
  width: 20px;
  height: 20px;
  padding-left: 5px;
  margin-left: 10px;
  margin-right: 5px;
  background: #EBEAED 0% 0% no-repeat padding-box;
  border: 1px solid #DEDCE1;
  border-radius: 5px;
  opacity: 1;
  font-size: 20px;
`;


export const SearchInput = styled.input`
  height: 50px;
  width: 403px;
  padding-left: 5px;
  margin-left: 10px;
  margin-right: 5px;
  background: #EBEAED 0% 0% no-repeat padding-box;
  border: 1px solid #DEDCE1;
  border-radius: 5px;
  opacity: 1;
  font-size: 20px;
`;


export const ToolList = styled.ul`
  width: 1200px;
  border-radius: 4px;
  list-style-type: none;
  margin: 10px auto;

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
  background: rgba(0,0,0,0.08);
  border: 0;
  border-radius: 4px;
  justify-content:center;

    a {
      padding-top: 10px;
      font-size: 30px;
      margin-bottom: 10px;
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

  align-items: center;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  background: #12DB89;
  border: 0;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;

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
      margin-left: 8px;

    }
`;

export const DeleteButton = styled.div`
  color: #F95E5A;

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

