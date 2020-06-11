import styled, { keyframes } from 'styled-components';

const appearEffect = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  margin-top: 40px ;
  width: 100%;
  max-width: 315px;
  text-align: center;
  align-self: start ;

    form {
      animation: ${appearEffect} 0.5s;
      display: flex;
      flex-direction: column;
      margin-top: 22px;

      input {
        background: rgba(0, 0, 0, 0.1);
        border: 0;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        color: #fff;
        margin: 0 0 10px;

      }

      span {
        color: #F95E5A;
        align-self: flex-start;
        margin: 0 0 10px;
        font-weight: bold;
      }

      button {
        margin: 5px 0 0;
        height: 44px;
        background: #f26532;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 5px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
          background: #d8440e;
        }
        &:active {
          background: #c03c0c;
        }
      }

      a {
        color: #fff;
        margin-top: 15px;
        font-size: 16px;
        opacity: 0.8;
        text-decoration: none;

        &:hover {
          opacity: 1;
        }
      }
    }
`;
