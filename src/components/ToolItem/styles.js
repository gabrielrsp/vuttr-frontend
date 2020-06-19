import styled from 'styled-components';

  export const Button = styled.div`
  display: flex;
  margin-top: 15px;
  margin-left: 20px;
  font-weight: bold;
  font-size: 20px;
  cursor:pointer;

  span {
    margin-top: 2px;
  }
`;

export const Item = styled.li`
  width: 100%;
  align-content: center;
  padding: 0px 15px 20px;
  margin-bottom: 13px;
  background: rgba(243,243,243,0.72);
  border: 0;
  border-radius: 4px;

  .buttons {
    display:flex;
  }

  .flex{
    display: flex;
    justify-content: space-between;

    .editItem {
      span {
        color: #FFBB43;
        &:hover {
          color: #ffab1a;
        }
        &:active {
            color: #e69100;
        }
      }
    }

    .deleteItem {
      span {
        color: #F95E5A;
        &:hover {
          color: #CC4C4C;
        }
        &:active {
            color: #A53F3F;
        }
      }
    }

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

  .strongBlock {
    display: inline-block;
  }

  strong {
    margin-bottom: 15px;
    font-size: 18px;
  }

`;
