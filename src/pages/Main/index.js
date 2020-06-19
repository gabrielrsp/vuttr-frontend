import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ToolList, Header, AddButton, SearchInput, CheckBoxInput, Overlay } from './styles';
import { FaPlus, FaSearch, FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import ModalAdd from '../../components/ModalAdd';
import ModalDelete from '../../components/ModalDelete';
import ModalEdit from '../../components/ModalEdit';
import ToolItem from '../../components/ToolItem';
import { toast } from 'react-toastify';

import api from '../../services/api';

function Main() {

  const [overlay, setOverlay] = useState(false);

  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [tool, setTool] = useState([]);
  const [idClick, setIdClick] = useState(1);

  const [newTitle, setNewTitle] = useState('');
  const [newLink, setNewLink] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newTags, setNewTags] = useState('');
  const [checkBox, setCheckBox] = useState(false);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function loadTools() {
      const response = await api.get('tools')
      setTool(response.data)
    }
    loadTools();
  }, [idClick])


  function toggleCheckBox() {
    setCheckBox(!checkBox)
  }

  const toggleOverlay = useCallback(() => {
    setOverlay(!overlay)
  }, [overlay]);

  const toggleModalAdd = useCallback(() => {
    toggleOverlay()
    setDeleteModal(false)
    setEditModal(false)
    setAddModal(!addModal)
  }, [addModal, toggleOverlay]);

  async function handleAddTool(e) {

    if (!newTitle) {
      e.preventDefault()
      toast.error('Tool Name is Required');
      return;
    } else {

      const response = await api.post('/tools', {
        title: newTitle,
        link: newLink,
        description: newDescription,
        tags: newTags.split(' ').filter(Boolean)
      });

      const { title, link, description, tags } = response.data;

      const newTool = { title, link, description, tags }

      setTool([...tool, newTool])
      setNewTitle('');
      setNewLink('');
      setNewDescription('');
      setNewTags('');
      toggleModalAdd();
      setIdClick('');
      toast.success('New Tool Added');

    }
  }

  function openEditModal(id) {
    toggleOverlay()
    setDeleteModal(false)
    setAddModal(false)
    setEditModal(true)
    setIdClick(id)

    let toolEdit = tool.filter(tool => { return tool.id === id; })
    const { title, link, description, tags } = toolEdit[0]

    setNewTitle(title);
    setNewLink(link);
    setNewDescription(description);
    setNewTags(tags.toString().split(',').join(' '));

  };

  async function handleUpdateTool() {
    if (!newTitle) {
      toast.error('Tool Name is Required');
    } else {

      const response = await api.put(`tools/${idClick}`, {
        title: newTitle,
        link: newLink,
        description: newDescription,
        tags: newTags.split(' ').filter(Boolean)
      });

      const { title, link, description, tags } = response.data;

      const newTool = { title, link, description, tags };
      const newTools = tool
      const toolIndex = tool.findIndex(tool => tool.id === idClick)

      newTools[toolIndex] = newTool;

      setTool(newTools)

      setNewTitle('');
      setNewLink('');
      setNewDescription('');
      setNewTags('');
      setIdClick('')
      closeEditModal()
    }

  }

  async function closeEditModal() {
    toggleOverlay()
    setAddModal(false)
    setEditModal(false)
    setDeleteModal(false)

  };

  async function toggleDeleteModal(id) {
    toggleOverlay()
    setAddModal(false)
    setEditModal(false)
    setDeleteModal(!deleteModal)
    setIdClick(id)
  };

  async function deleteTool() {
    await api.delete(`tools/${idClick}`)
    setTool(tool.filter(tool => tool.id !== idClick))
    toggleDeleteModal();
    setIdClick(0);
    toast.success('Tool Removed');
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
              <SearchInput placeholder='search' value={filter} onChange={(e) => setFilter(e.target.value)} />
            </div>
            <div className="searchAddBox">
              <div className="checkBoxContainer" >
                <CheckBoxInput type='checkbox' onClick={toggleCheckBox} />
                <span className="spanCheckBox" >search in tags only</span>
              </div>
              <div>
                <AddButton className="addButton" onClick={toggleModalAdd}  >
                  <FaPlus color='#fff' size='25px' />
                  <span>Add</span>
                </AddButton>
              </div>
            </div>
          </div>
        </div>
      </Header>

      <ToolList>

        {
          filter.trim() ?

            checkBox ?

              tool.filter(tool => (tool.tags.toString().toLowerCase().includes(filter.toLowerCase().trim())))
                .map(tool => (
                  <>
                    <ToolItem
                      key={tool.id}
                      tool={tool}
                      onDeleteModal={() => toggleDeleteModal(tool.id)}
                      onEditModal={() => openEditModal(tool.id)}
                    />
                  </>
                ))

              :

              tool.filter(tool => (tool.title.toLowerCase().startsWith(filter.toLowerCase().trim())))
                .map(tool => (
                  <>
                    <ToolItem
                      key={tool.id}
                      tool={tool}
                      onDeleteModal={() => toggleDeleteModal(tool.id)}
                      onEditModal={() => openEditModal(tool.id)}
                    />
                  </>
                ))


            :

            tool.map(tool => (
              <>
                <ToolItem
                  key={tool.id}
                  tool={tool}
                  onDeleteModal={() => toggleDeleteModal(tool.id)}
                  onEditModal={() => openEditModal(tool.id)}
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
                onDeleteModal={toggleDeleteModal}
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
                onAddTool={handleAddTool}
                onAddModal={toggleModalAdd}
                onChangeTitle={e => setNewTitle(e.target.value)}
                onChangeLink={e => setNewLink(e.target.value)}
                onChangeDescription={e => setNewDescription(e.target.value)}
                onChangeTags={e => setNewTags(e.target.value)}
              />
            </Overlay>
          </>
          : <></>
      }

      {
        overlay && editModal ?
          <>
            <Overlay>
              <ModalEdit
                onCloseEditModal={closeEditModal}
                onUpdateTool={handleUpdateTool}
                onChangeTitle={e => setNewTitle(e.target.value)}
                onChangeLink={e => setNewLink(e.target.value)}
                onChangeDescription={e => setNewDescription(e.target.value)}
                onChangeTags={e => setNewTags(e.target.value)}
                title={newTitle}
                link={newLink}
                description={newDescription}
                tags={newTags}
              />
            </Overlay>
          </>
          : <></>
      }

    </>
  );
}

export default Main;
