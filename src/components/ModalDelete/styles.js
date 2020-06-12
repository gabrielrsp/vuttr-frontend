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

export const Container = styled.div`
  animation: ${appearEffect} 0.3s;
  display: flex;
  align-self: center;
  flex-direction: column;
  background-color: #4d4d4d;
  z-index: 2;
  width: 700px;
  border-radius: 5px;
  margin-top: 100px;

  div {
    align-self: flex-start;
    align-items: center;
    margin: 20px ;
  }

  .buttonBox {
    display: flex;
    align-self: flex-end  ;
  }

  button {
    background: #F95E5A;
    color: #fff;
    display: flex;
    align-self: flex-end;
    align-items: center;
    margin: 0 0 8px 20px;
    padding: 5px 10px;
    font-size: 20px;
    font-weight: bold;
    border: 0;
    border-radius: 5px;

    span {
        flex: 1;
        text-align: center;
        font-weight: bold;
    }

    &:hover {
      background: #CC4C4C;
    }
    &:active {
      background: #A53F3F;
    }
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

`;
