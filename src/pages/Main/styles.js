import styled from 'styled-components';

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

  export const Header = styled.div`
      display: flex;
      justify-content: center ;
      width: 100%;
      background: #4d4d4d;
      padding: 0 10px;

    img {
        border-radius: 5px;
        align-self: flex-start;
      }

      .contents {
        margin-top: 20px ;
        display: flex;
        align-items: center;
      }

      .title {
        margin-left: 20px;
      }

      .control {
        display: flex;
        margin-top: 20px;
        margin-bottom: 15px;
        align-items: center;
      }

      .spanCheckBox {
        font-size: 19px;
        font-weight: bold;
        color: #f26532;
        }

      .profile{
        text-align: right;
        align-self: flex-start;
        display: flex;
        margin-left: auto;

        .profileName {
          margin-right: 12px;
        }

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

      h1 {
        font-size: 36px;
        color: #fff;
      }
      h3 {
        font-size: 28px;
        color: #fff;
      }

  `;

  export const CheckBoxInput = styled.input`
    min-width: 20px;
    min-height: 20px;
    margin-left: 10px;
    margin-right: 5px;
    background: #EBEAED ;
    border: 1px solid #fff;
    border-radius: 5px;

  `;

  export const SearchInput = styled.input`
    height: 50px;
    padding-left: 5px;
    margin: 0 5px 0 10px;
    background: rgba(0, 0, 0, 0.27);
    font-size: 20px;
    color: #fff;
    border: 0;
    border-radius: 5px;

  `;

  export const Container = styled.div`
    width: 1200px ;
    margin: auto;

  `;

  export const ToolList = styled.ul`
    display: flex;
    width: 100%;
    border-radius: 4px;
    list-style-type: none;
    margin-top: 30px;

    li {
      width: 100%;
      padding: 0px 15px 20px;
      background: rgba(243,243,243,0.72);
      border: 0;
      border-radius: 4px;

      .flex{
        display: flex;
        justify-content: space-between;
      }

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
    margin-left: auto !important;
    font-weight: bold;
    font-size: 20px;
    border: 0;
    border-radius: 5px;
    background: #1fcc6f;
    padding: 5px 10px;

    span {
        flex: 1;
        color: #fff;
        text-align: center;
        font-weight: bold;
        margin-left: 5px;
      }

    &:hover {
      background: #10B26C;
    }
    &:active {
        background: #0E995D;
    }

  `;

  export const DeleteButton = styled.div`
    display: flex;
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


