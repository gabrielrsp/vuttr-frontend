import React from 'react';
import { Button, Item } from './styles';
import { FaTimes, FaEdit } from "react-icons/fa";

function ToolItem({ tool, onDeleteModal, onEditModal }) {

  let newUrl = tool.link

  if (!tool.link.match(/^[a-zA-Z]+:\/\//)) {
    newUrl = tool.link = 'http://' + tool.link;
  }

  return (
    <Item >
      <div id="controlItem" className="flex">
        <a href={`${newUrl}`}>{tool.title}</a>
        <div className="buttons">
          <Button className="editItem" onClick={onEditModal} >
            <FaEdit id="faEdit" color="#f26532" size="25px" />
            <span>Edit</span>
          </Button >
          <Button className="deleteItem" onClick={onDeleteModal} >
            <FaTimes id="faTimes" className="deleteItem" color="#f26532" size="25px" />
            <span>Remove</span>
          </Button >
        </div>
      </div>
      <p>{tool.description}</p>
      {
        tool.tags.map(tag => (
          <strong className="strongBlock">{`#${tag}\xa0\xa0`}</strong>
        ))
      }
    </Item>
  );
}

export default ToolItem;
