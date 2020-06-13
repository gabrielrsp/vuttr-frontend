import React, { useRef, useEffect } from 'react';
import { Container } from './styles';
import { FaPlus } from "react-icons/fa";

export default function ModalAdd({ onModalAdd }) {

  const useOutsideClick = (ref, callback) => {

    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    useEffect(() => {
      document.addEventListener("click", handleClick);
      return () => {

        document.removeEventListener("click", handleClick);
      };
    });
  };

  const ref = useRef();

  useOutsideClick(ref, () => {
    onModalAdd()
  });

  return (
    <Container ref={ref} >
      <div>
        <FaPlus style={{ marginRight: '5px' }} color="#f26532" size="25px" />
        <h2>Add New Tool</h2>
      </div>
      <h4 className="title" placeholder="" >Tool Name</h4>
      <input type="text" placeholder="Tool title" />
      <h4 className="title" >Tool Link</h4>
      <input type="text" placeholder="Enter URL here" />
      <h4 className="title" >Tool Description</h4>
      <textarea placeholder="Description of the tool..." />
      <h4 className="title" >Tags</h4>
      <input type="text" />
      <div className="button">
        <button className="addButton" onClick={onModalAdd} >
          <span>Cancel</span>
        </button>
        <button className="addButton" onClick={onModalAdd} >
          <span>Add Tool</span>
        </button>
      </div>
    </Container>
  );

}

