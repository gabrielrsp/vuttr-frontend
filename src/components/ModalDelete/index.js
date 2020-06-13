import React, { useRef, useEffect } from 'react';
import { Container } from './styles';
import { FaTimes } from "react-icons/fa";

export default function ModalDelete({ onModalDelete }) {

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
    onModalDelete()
  });

  return (
    <Container className="deleteBox" ref={ref}  >
      <div className="iconBox">
        <FaTimes color="#f26532" size="25px" />
        <h2>Delete Tool</h2>
      </div>
      <div>
        <h3>Want to delete this tool?</h3>
      </div>
      <div className='buttonBox'>
        <button  onClick={onModalDelete} >
          <span>Cancel</span>
        </button>
        <button onClick={onModalDelete} >
          <span>Yes, Remove</span>
        </button>
      </div>
    </Container>
  );
}
