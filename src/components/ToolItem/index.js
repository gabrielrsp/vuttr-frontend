import React from 'react';
import { Button, Item } from './styles';
import { FaTimes, FaEdit } from "react-icons/fa";

function ToolItem({ tool, onDeleteModal, onEditModal }) {

  return (
    <Item >
      <div className="flex">
        <a href={tool.link}> {tool.title}</a>
        <div className="buttons">
          <Button className="editItem" onClick={onEditModal} >
            <FaEdit color="#FFBB43" size="25px" />
            <span>Edit</span>
          </Button >
          <Button className="deleteItem" onClick={onDeleteModal} >
            <FaTimes color="#F95E5A" size="25px" />
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
