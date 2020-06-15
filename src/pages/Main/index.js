import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ToolList, Header, AddButton, DeleteButton, SearchInput, CheckBoxInput, Overlay } from './styles';
import { FaPlus, FaTimes, FaSearch, FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

import ModalAdd from '../../components/ModalAdd';
import ModalDelete from '../../components/ModalDelete';
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
    setDeleteModal(false)
    setAddModal(!addModal)
  }, [addModal, toggleOverlay]);

  const toggleModalDelete = useCallback(() => {
    toggleOverlay()
    setAddModal(false)
    setDeleteModal(!deleteModal)
  }, [deleteModal, toggleOverlay]);

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
    toggleOverlay(false)
  });

  let modalListener = (event) => {

    if (event.keyCode === 27) {
      if (addModal === true) {
        setOverlay(false)
        setAddModal(false)
        window.removeEventListener("keydown", modalListener);
      }

      if (deleteModal === true) {
        setOverlay(false)
        setDeleteModal(false)
        window.removeEventListener("keydown", modalListener);
      }
    }
  }
  window.addEventListener("keydown", modalListener);

  return (
    <>
      <Header>
        <div>
          <div className="contents">
            <img className="logo" src={logo} alt="vuttr" width={'12%'} />
            <div className="title" >
              <h1>VUTTR</h1>
              <h3>Very Useful Tools to Remember</h3>
            </div>
            <div className="profile" >
              <div className="profileName">
                <Link to="/profile">Gabriel Rodrigues</Link>
              </div  >
              <Link to="/profile">
                <FaUserCircle color='#f26532' size={32} />
              </Link>
            </div>
          </div>

          <div className="control">
            <div className="inputBar">
              <FaSearch className="BackgroundSearch logoSearch" color='#f26532' size={28} />
              <SearchInput placeholder='search' />
            </div>
            <div className="searchAddBox">
              <div className="checkBoxContainer" >
                <CheckBoxInput type='checkbox' />
                <span className="spanCheckBox" >search in tags only</span>
              </div>
              <AddButton onClick={toggleModalAdd}  >
                <FaPlus color='#fff' size='25px' />
                <span>Add</span>
              </AddButton>
            </div>
          </div>
        </div>
      </Header>

      <ToolList>
        <li>
          <div className="flex">
            <a href="https://www.fastify.io/"> fastify</a>
            <DeleteButton onClick={toggleModalDelete} >
              <FaTimes color="#F95E5A" size="25px" />
              <span>Remove</span>
            </DeleteButton>
          </div>
          <p>Extremely fast and simple, load-overhead web framework for nodeJS. Supports http2 </p>
          <strong> #web #framework #node #http2 </strong>
        </li>
      </ToolList>

      {
        overlay && deleteModal ?
          <>
            <Overlay>
              <ModalDelete onModalDelete={toggleModalDelete} />
            </Overlay>
          </>
          : <></>
      }

      {
        overlay && addModal ?
          <>
            <Overlay>
              <ModalAdd onModalAdd={toggleModalAdd} />
            </Overlay>
          </>
          : <></>
      }

    </>
  );
}

export default Main;
