import React from 'react';
import { DeleteButton, Item } from './styles';
import { FaTimes } from "react-icons/fa";

function ToolItem({ tool, onDeleteModal }) {

  return (
    <Item >
      <div className="flex">
        <a href={tool.link}> {tool.title}</a>
        <DeleteButton onClick={onDeleteModal} >
          <FaTimes color="#F95E5A" size="25px" />
          <span>Remove</span>
        </DeleteButton >
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
