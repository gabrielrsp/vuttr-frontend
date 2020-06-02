import React from 'react';

import { Container, ToolList, ControlBar, Header, AddButton, DeleteButton, SearchInput, CheckBoxInput } from './styles';
import { FaPlus, FaTimes, FaSearch } from "react-icons/fa";

function Main() {
  return (
    <Container>

      <Header>
        <div>
          <h1>VUTTR</h1>
          <h3>Very Useful Tools to Remember</h3>
        </div>
      </Header>

      <ControlBar>
        <div>
          <FaSearch size="22px" />
          <SearchInput type='search' placeholder='search' />
          <div style={{ margin: 'auto' }}>
          <CheckBoxInput type='checkbox' />
          <span >search in tags only</span>
          </div>
        </div>

        <div>
          <AddButton>
          <FaPlus color="#fff" size="25px" />
            <span>Add</span>
          </AddButton>
        </div>

      </ControlBar>

      <ToolList>
        <li>
          <div>
            <a href="https://www.fastify.io/"> fastify</a>

            <DeleteButton className="delete"  >
              <FaTimes color="#F95E5A" size="25px" />
              <span>Remove</span>

            </DeleteButton>

          </div>
          <p>Extremely fast and simple, load-overhead web framework for nodeJS. Supports http2 </p>
          <strong> #web #framework #node #http2 </strong>
        </li>
      </ToolList>

    </Container>
  );
}

export default Main;
