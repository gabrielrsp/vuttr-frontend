import styled, { keyframes } from 'styled-components';

const appearEffect = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

  export const Button = styled.div`
    display: flex;
    margin-top: 15px;
    margin-left: 10px;
    font-weight: bold;
    font-size: 20px;
    cursor:pointer;

    span {
      margin-top: 2px;
    }
`;

export const Item = styled.li`
animation: ${appearEffect} 0.3s;
  width: 100%;
  align-content: center;
  padding: 5px 15px 10px;
  margin-bottom: 13px;
  background: rgba(243,243,243,0.72);
  border: 0;
  border-radius: 5px;

  @media(max-width: 610px ) {

    #faEdit {
      width: 40px;
    }
    #faTimes {
      width: 40px;
    }

    .editItem{
      span {
        display: none;
      }
    }
    .deleteItem{
      span {
        display: none;
      }
    }

  }

  &:hover {
    background: rgba(255,255,255,0.9);
    transition: 0.33s;
  }

  .buttons {
    display:flex;
  }

  .flex{
    display: flex;
    justify-content: space-between;

    .editItem {
      span {
        color: #f26532;
        &:hover {
        color: #f04b0f;
        }
        &:active {
          color: #c03c0c;
        }
      }
    }

    .deleteItem {
      span {
        color: #f26532;
        &:hover {
        color: #f04b0f;
        }
        &:active {
          color: #c03c0c;
        }
      }
    }

  }

  a {
    padding-top: 10px;
    font-size: 30px;
    margin-bottom: 15px;
    color: #f26532;

    &:hover {
      color: #f04b0f;
    }
    &:active {
      color: #c03c0c;
    }
  }

  p {
    margin-bottom: 18px;
    font-size: 20px;
  }

  .strongBlock {
    display: inline-block;
  }

  strong {
    margin-bottom: 10px;
    font-size: 18px;
  }

`;
