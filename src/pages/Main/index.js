import React, { useState, useEffect, useRef, useCallback } from 'react';

import { toast } from 'react-toastify';
import { ToolList, Overlay, LoadingMessage } from './styles';

import api from '../../services/api';
import Header from '../../components/Header';
import ModalAdd from '../../components/ModalAdd';
import ModalDelete from '../../components/ModalDelete';
import ModalEdit from '../../components/ModalEdit';
import ToolItem from '../../components/ToolItem';
import lottie from 'lottie-web';

export default function Main() {

  const [overlay, setOverlay] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [tool, setTool] = useState([] | null );
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

    if (!newTitle || newTitle.trim() === '') {
      e.preventDefault()
      toast.error('Tool Name is Required');
      return;
    } else {

      e.preventDefault()

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

  async function handleUpdateTool(e) {
    if (!newTitle) {
      e.preventDefault()
      toast.error('A Tool Name is Required');
      return;
    } else {

      e.preventDefault()

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
      toast.success('Tool Updated');
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

  useEffect(() => {

    lottie.loadAnimation({
      container: boxAnimation.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../assets/gear.json')
    })

  }, [])

  const boxAnimation = useRef(null);

  const ref = useRef();

  useOutsideClick(ref, () => {
    toggleOverlay(false)
  });

  let modalListener = (event) => {

    if (event.keyCode === 27) {

      if (addModal === true) {
        setOverlay(false)
        setAddModal(false)
        setEditModal(false)
        window.removeEventListener("keydown", modalListener);
      }

      if (deleteModal === true) {
        setOverlay(false)
        setDeleteModal(false)
        setEditModal(false)
        window.removeEventListener("keydown", modalListener);
      }

      if (editModal === true) {
        setOverlay(false)
        setAddModal(false)
        setDeleteModal(false)
        window.removeEventListener("keydown", modalListener);
      }

    }
  }
  window.addEventListener("keydown", modalListener);

  return (
    <>
      <Header
        filterValue={filter}
        onChangeFilterValue={(e) => setFilter(e.target.value)}
        onToggleCheckBox={toggleCheckBox}
        onToggleModalAdd={toggleModalAdd}
      />

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


                     !tool ?
            <>
            <LoadingMessage>Loading Tools...</LoadingMessage>
            <div ref={boxAnimation} ></div>
            </>
    
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
