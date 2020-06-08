import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Container, Overlay, ToolList, Header, AddButton, DeleteButton, SearchInput, CheckBoxInput, Modal } from './styles';
import { FaPlus, FaTimes, FaSearch } from "react-icons/fa";

import logo from '../../assets/logo.svg';


function Main() {

  const [overlay, setOverlay] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const toggleOverlay = useCallback(() => {
    setOverlay(!overlay)
  }, [overlay]);
  const toggleModalAdd = useCallback(() => {
    toggleOverlay()
    setAddModal(true)
    setDeleteModal(false)
  }, [toggleOverlay]);

  const toggleModalDelete = useCallback(() => {
    toggleOverlay()
    setAddModal(false)
    setDeleteModal(true)
  }, [toggleOverlay]);

  const useOutsideClick = (ref, callback) => {

    const handleClick = e => {
      console.log('lalaaa')
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
    toggleOverlay(false)
  });

  return (

    <Container>
      <Header>
        <div className="block" >
          <div className="flex">
            <img style={{ marginRight: "40px" }} src={logo} alt="vuttr" width={'12%'} />
            <div className="header">
              <h1>VUTTR</h1>
              <h3>Very Useful Tools to Remember</h3>
            </div>
          </div>
          <div className="flex">
            <div className="contents" >
              <FaSearch color='#f26532' size="22px" />
              <SearchInput placeholder='search' />
              <CheckBoxInput type='checkbox' />
              <span >search in tags only</span>
            </div>
            <AddButton className='add' onClick={toggleModalAdd}  >
              <FaPlus color='#fff' size='25px' />
              <span>Add</span>
            </AddButton>
          </div>
        </div>

      </Header>

      {
        overlay && addModal ?
          <>
            <Overlay>
              <Modal className="addModal" ref={ref} >
                <div>
                  <FaPlus style={{ marginRight: '5px' }} color="black" size="25px" />
                  <h2>Add New Tool</h2>
                </div>
                <h4 className='title' >Tool Name</h4>
                <input type="text" />
                <h4 className='title' >Tool Link</h4>
                <input type="text" />
                <h4 className='title' >Tool Description</h4>
                <textarea placeholder="Description of the tool..." />
                <h4 className='title' >Tags</h4>
                <input type="text" />
                <button onClick={toggleModalAdd} >
                  <span>Add Tool</span>
                </button>
              </Modal>
            </Overlay>
          </>
          : <></>
      }

      <ToolList>
        <li>
          <div>
            <a href="https://www.fastify.io/"> fastify</a>
            <DeleteButton onClick={toggleModalDelete} >
              <FaTimes color="#F95E5A" size="25px" />
              <span>Remove</span>
            </DeleteButton>
          </div>
          <p>Extremely fast and simple, load-overhead web framework for nodeJS. Supports http2 </p>
          <strong> #web #framework #node #http2 </strong>
        </li>

        <li>
          <div>
            <a href="https://www.fastify.io/"> fastify</a>
            <DeleteButton onClick={toggleModalDelete} >
              <FaTimes color="#F95E5A" size="25px" />
              <span>Remove</span>
            </DeleteButton>
          </div>
          <p>Extremely fast and simple, load-overhead web framework for nodeJS. Supports http2 </p>
          <strong> #web #framework #node #http2 </strong>
        </li>

        <li>
          <div>
            <a href="https://www.fastify.io/"> fastify</a>
            <DeleteButton onClick={toggleModalDelete} >
              <FaTimes color="#F95E5A" size="25px" />
              <span>Remove</span>
            </DeleteButton>
          </div>
          <p>Extremely fast and simple, load-overhead web framework for nodeJS. Supports http2 </p>
          <strong> #web #framework #node #http2 </strong>
        </li>

        <li>
          <div>
            <a href="https://www.fastify.io/"> fastify</a>
            <DeleteButton onClick={toggleModalDelete} >
              <FaTimes color="#F95E5A" size="25px" />
              <span>Remove</span>
            </DeleteButton>
          </div>
          <p>Extremely fast and simple, load-overhead web framework for nodeJS. Supports http2 </p>
          <strong> #web #framework #node #http2 </strong>
        </li>

        <li>
          <div>
            <a href="https://www.fastify.io/"> fastify</a>
            <DeleteButton onClick={toggleModalDelete} >
              <FaTimes color="#F95E5A" size="25px" />
              <span>Remove</span>
            </DeleteButton>
          </div>
          <p>Extremely fast and simple, load-overhead web framework for nodeJS. Supports http2 </p>
          <strong> #web #framework #node #http2 </strong>
        </li>

        <li>
          <div>
            <a href="https://www.fastify.io/"> fastify</a>
            <DeleteButton onClick={toggleModalDelete} >
              <FaTimes color="#F95E5A" size="25px" />
              <span>Remove</span>
            </DeleteButton>
          </div>
          <p>Extremely fast and simple, load-overhead web framework for nodeJS. Supports http2 </p>
          <strong> #web #framework #node #http2 </strong>
        </li>

        <li>
          <div>
            <a href="https://www.fastify.io/"> fastify</a>
            <DeleteButton onClick={toggleModalDelete} >
              <FaTimes color="#F95E5A" size="25px" />
              <span>Remove</span>
            </DeleteButton>
          </div>
          <p>Extremely fast and simple, load-overhead web framework for nodeJS. Supports http2 </p>
          <strong> #web #framework #node #http2 </strong>
        </li>

        <li>
          <div>
            <a href="https://www.fastify.io/"> fastify</a>
            <DeleteButton onClick={toggleModalDelete} >
              <FaTimes color="#F95E5A" size="25px" />
              <span>Remove</span>
            </DeleteButton>
          </div>
          <p>Extremely fast and simple, load-overhead web framework for nodeJS. Supports http2 </p>
          <strong> #web #framework #node #http2 </strong>
        </li>

        {
          overlay && deleteModal ?
            <>
              <Overlay>
                <Modal className="deleteModal" ref={ref} >
                  <div>
                    <FaTimes style={{ marginRight: '5px' }} color="black" size="25px" />
                    <h2>Delete Tool</h2>
                  </div>
                  <div>
                    <h3>Want to delete this tool?</h3>
                  </div>
                  <div className='button'>
                    <button className='deleteButton'>
                      <span>Cancel</span>
                    </button>
                    <button className='deleteButton' onClick={toggleModalAdd} >
                      <span>Yes, Remove</span>
                    </button>
                  </div>
                </Modal>
              </Overlay>
            </>
            : <></>
        }
      </ToolList>
    </Container>
  );
}

export default Main;
