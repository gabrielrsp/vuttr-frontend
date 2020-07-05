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

  export const LoadingMessage = styled.h1`
    display: flex;
    justify-content: center;
   color: #f26532;
  `;


