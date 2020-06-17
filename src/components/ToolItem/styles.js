import styled from 'styled-components';

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

export const Item = styled.li`

  width: 100%;
  align-content: center;
  padding: 0px 15px 20px;
  margin-bottom: 13px;
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

  .strongBlock {
    display: inline-block;
  }

  strong {
    margin-bottom: 15px;
    font-size: 18px;


  }


`;
