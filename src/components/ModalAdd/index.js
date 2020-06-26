import React, { useRef, useEffect } from 'react';
import { Container } from './styles';
import { FaPlus } from "react-icons/fa";

export default function ModalAdd({ onAddModal, onAddTool, onChangeTitle, onChangeLink, onChangeDescription, onChangeTags }) {

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
    onAddModal()
  });

  return (
    <Container ref={ref} >
      <div>
        <FaPlus style={{ marginRight: '5px' }} color="#f26532" size="25px" />
        <h2>Add New Tool</h2>
      </div>

      <h4 className="title" placeholder="" >tei</h4>
      <input type="text" placeholder="Tool title" onChange={onChangeTitle} />

      <h4 className="title" >Tool Link</h4>
      <input type="text" placeholder="https://www.example.com" onChange={onChangeLink} />

      <h4 className="title" >Tool Description</h4>
      <textarea placeholder="Description of the tool..." onChange={onChangeDescription} />

      <h4 className="title" >Tags</h4>
      <input type="text" placeholder="Tags" onChange={onChangeTags} />

      <div className="button">
        <button className="addButton" onClick={onAddModal} >
          <span>Cancel</span>
        </button>
        <button className="addButton" onClick={onAddTool} >
          <span>Add Tool</span>
        </button>
      </div>
    </Container>
  );

}

