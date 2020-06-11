import styled from 'styled-components';


export const Wrapper = styled.div`
`;

export const Container = styled.div`

  max-width: 600px;
  margin: 50px auto;
  margin: 30px 10px;

  form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 80px;

  input{
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  border: 0;
  border-radius: 4px;
  height: 44px;
  padding: 15px;
  margin: 10px 0 10px;

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


  > button {

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

      span {
    margin-top: 2px;
  }
  &:hover {
    background: #CC4C4C;
  }

  &:active {
      background: #A53F3F;
  }
  cursor:pointer;
    }

`;
