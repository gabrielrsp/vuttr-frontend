import React, { useRef, useEffect } from 'react';
import { Container } from './styles';
import { FaEdit } from "react-icons/fa";

export default function ModalEdit({ title, link, description, tags, onUpdateTool, onCloseEditModal, onEditTool, onChangeTitle, onChangeLink, onChangeDescription, onChangeTags }) {

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
    onCloseEditModal
    ()
  });

  return (
    <Container ref={ref} >
      <div>
        <FaEdit style={{ marginRight: '5px' }} color="#f26532" size="25px" />
        <h2>Edit Tool</h2>
      </div>

      <h4 className="title" placeholder="" >Tool Name</h4>
      <input type="text" placeholder="Tool title" value={title} onChange={onChangeTitle} />

      <h4 className="title" >Tool Link</h4>
      <input type="text" placeholder="Enter URL here" value={link} onChange={onChangeLink} />

      <h4 className="title" >Tool Description</h4>
      <textarea placeholder="Description of the tool..." value={description} onChange={onChangeDescription} />

      <h4 className="title" >Tags</h4>
      <input type="text" value={tags} placeholder="Tags" onChange={onChangeTags} />

      <div className="button">
        <button className="editButton" onClick={onCloseEditModal} >
          <span>Cancel</span>
        </button>
        <button className="editButton" onClick={onUpdateTool} >
          <span>Edit Tool</span>
        </button>
      </div>
    </Container>
  );

}

