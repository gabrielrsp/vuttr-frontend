import styled from 'styled-components';

  export const Container = styled.header`
  display: grid;
  justify-content: center ;
  width: 100%;
  background: #4d4d4d;
  padding: 0 10px;
  position: sticky;
  top: 0;

  img {
      border-radius: 5px;
      align-self: flex-start;
    }

  @media(max-width: 610px ) {
    position: unset;
  }

  .contents {
    display: flex;
    margin-top: 20px ;
    align-self:center;
    align-items: center;

    @media(max-width: 610px ) {
      margin-left: 0px;
      margin-top: 10px ;

      .contents {
        margin-left: 0px;
        margin-top: 0px ;
      }

      .profileName{
        display: none;
      }

      .logo {
        width: 20%;
        margin-left: 2px;
      }

      h1 {
        display: flex;
        font-size: 26px;
      }

      h3 {
        display: none;
        font-size: large;
      }
    }
  }

  .control {
    display: flex;
    margin-top: 18px;
    margin-bottom: 15px;

    align-items: center;

    .inputBar{
      display: contents;
    }

    .searchAddBox {
      display: contents;
      width: 100%;
      justify-content: space-between;
      margin: auto;
      margin-top: 15px;
      align-items: center;
    }

    @media(max-width: 610px ){
      display: block;
      margin-left: 0;

      button { margin: auto; }

      input { width: -webkit-fill-available; }

      .checkBoxContainer {
        margin: unset;
      }

      .searchAddBox {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin: auto;
        margin-top: 15px;
        align-items: center;

      }

      .inputBar{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 5px;
      }

      .spanCheckBox {
        font-size: 18px;
      }
    }
  }

  .BackgroundSearch {
    background: rgba(0, 0, 0, 0.27);
    height: 50px;
    padding-left: 6px;
    padding-right: 6px;
    min-width: fit-content;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 5px;
  }

  .title {
    align-self: center;
    margin-left: 10px;
  }

  .checkBoxContainer {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-left: 10px;
    width: 100%;
  }

  .spanCheckBox {
    font-size: 20px;
    font-weight: bold;
    color: #f26532;
  }

  .profile{
    display: flex;
    align-self: flex-start;
    text-align: right;
    margin-left: auto;
    place-items: center;

    .profileName {
      margin-right: 12px;
      }

    a {
      text-decoration: none;
      font-size: 18px;
      color: #f26532;
      font-weight: bold;
      display:block;

      &:hover {
        color: #f04b0f;
      }
      &:active {
        color: #c03c0c;
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
  margin-right: 5px;
  background: #EBEAED ;
  border: 1px solid #fff;
  border-radius: 5px;

`;

export const SearchInput = styled.input`
  height: 50px;
  width: auto;
  padding-left: 5px;
  margin: 0 ;
  background: rgba(0, 0, 0, 0.27);
  font-size: 20px;
  color: #fff;
  border: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

`;

export const ToolList = styled.ul`
  max-width: 1200px ;
  margin: auto;
  display: block;
  border-radius: 4px;
  list-style-type: none;
  margin-top: 25px;

  @media(max-width: 610px ){
    margin: auto;
    margin-top: 15px;
  }

`;

export const AddButton = styled.button`
  display: flex;
  align-items: flex-end;
  margin: 0;
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
