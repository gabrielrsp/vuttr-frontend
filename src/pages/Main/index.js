import React, { useState, useEffect, useRef, useCallback } from 'react';

import { Container, Overlay, ToolList, ControlBar, Header, AddButton, DeleteButton, SearchInput, CheckBoxInput, ModalAdd } from './styles';
import { FaPlus, FaTimes, FaSearch } from "react-icons/fa";
import { motion } from 'framer-motion';

function Main() {


  const [overlay, setOverlay] = useState(false);

  const toggleOverlay = useCallback(() => {
    setOverlay(!overlay)
  }, [overlay]);

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
    setOverlay(!overlay)
  });




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
          <AddButton onClick={toggleOverlay}  >
            <FaPlus color="#fff" size="25px" />
            <span>Add</span>
          </AddButton>
        </div>

        {
          overlay ?
            <>
              <Overlay>
                <motion.div
                  exit={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}

                >

                  <ModalAdd ref={ref} >

                    <div>
                      <FaPlus style={{ marginRight: '8px' }} color="black" size="25px" />
                      <h2>Add New Tool</h2>
                    </div>

                    <h4>Tool Name</h4>
                    <input type="text" />

                    <h4>Tool Link</h4>
                    <input type="text" />

                    <h4>Tool Description</h4>
                    <textarea placeholder="Description of the tool..." />

                    <h4>Tags</h4>
                    <input type="text" />

                    <button onClick={toggleOverlay} >
                      <span>Add Tool</span>
                    </button>

                  </ModalAdd>
                </motion.div>
              </Overlay>
            </>
            : <></>
        }

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
