import React from 'react';
import { DeleteButton, Item} from './styles';
import { FaTimes } from "react-icons/fa";

function ToolItem({ onDelete }) {
  return (
    <Item>
    <div className="flex">
      <a href="https://www.fastify.io/"> fastify</a>
      <DeleteButton onClick={onDelete} >
        <FaTimes color="#F95E5A" size="25px" />
        <span>Remove</span>
      </DeleteButton>
    </div>
    <p>Extremely fast and simple, load-overhead web framework for nodeJS. Supports http2 </p>
    <strong> #web #framework #node #http2 </strong>
  </Item>
  );
}

export default ToolItem;
