import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ToolList, Header, AddButton, SearchInput, CheckBoxInput, Overlay } from './styles';
import { FaPlus, FaSearch, FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import ModalAdd from '../../components/ModalAdd';
import ModalDelete from '../../components/ModalDelete';
import ToolItem from '../../components/ToolItem';

import api from '../../services/api';

function Main() {

  const [overlay, setOverlay] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [tool, setTool] = useState([]);
  const [idClick, setIdClick] = useState(1);
  const [confirm, setConfirm] = useState(false);


  useEffect(() => {
    async function loadTools() {
      const response = await api.get('tools')
      setTool(response.data)

    }
    loadTools();
  }, [idClick])



  const toggleOverlay = useCallback(() => {
    setOverlay(!overlay)
  }, [overlay]);

  const toggleModalAdd = useCallback(() => {
    toggleOverlay()
    setDeleteModal(false)
    setAddModal(!addModal)
  }, [addModal, toggleOverlay]);



  async function toggleModalDelete(id) {

    toggleOverlay()
    setAddModal(false)
    setDeleteModal(!deleteModal)
    setConfirm(false)

    setIdClick(id)

  };


  async function deleteTool() {

    await api.delete(`tools/${idClick}`)
    setTool(tool.filter(tool => tool.id !== idClick))
    toggleModalDelete();
    setConfirm(false);

    setIdClick(0);

  }




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
        {
          tool.map(tool => (
            <>
              <ToolItem
                key={tool.id}
                tool={tool}
                onDeleteModal={() => toggleModalDelete(tool.id)}
              />
            </>
          ))
        }
      </ToolList>

      {
        overlay && deleteModal ?
          <>
            <Overlay>
              <ModalDelete
                onModalDelete={toggleModalDelete}
                onConfirmDelete={() => deleteTool()}
              />
            </Overlay>
          </>
          : <></>
      }

      {
        overlay && addModal ?
          <>
            <Overlay>
              <ModalAdd
                onModalAdd={toggleModalAdd}
              />
            </Overlay>
          </>
          : <></>
      }

    </>
  );
}

export default Main;
