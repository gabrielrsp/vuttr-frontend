import React from 'react';

import { useSelector } from 'react-redux';
import { Container, AddButton, SearchInput, CheckBoxInput } from './styles';
import { FaPlus, FaSearch, FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

export default function Header({ filterValue, onChangeFilterValue, onToggleCheckBox, onToggleModalAdd }) {

  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <div>


      <div className="contents">
        <img className="logo" src={logo} alt="vuttr" width={'12%'} />
        <div className="title" >
          <h1>VUTTR</h1>
          <h3>Very Useful Tools to Remember</h3>
        </div>
        <div className="profile" >
          <div className="profileName">
            <Link to="/profile">Hello, {profile.name.trim().split(" ")[0]}!</Link>
          </div  >
          <Link to="/profile">
            <FaUserCircle color='#f26532' size={32} />
          </Link>
        </div>
      </div>
      <div className="control">
        <div className="inputBar">
          <FaSearch id='faSearch' />
          <SearchInput placeholder='search' value={filterValue} onChange={onChangeFilterValue} />
        </div>
        <div className="searchAddBox">
          <div className="checkBoxContainer" >
            <CheckBoxInput type='checkbox' onClick={onToggleCheckBox} />
            <span className="spanCheckBox" >search in tags only</span>
          </div>
          <div>
            <AddButton className="addButton" onClick={onToggleModalAdd}  >
              <FaPlus color='#fff' size='25px' />
              <span>Add</span>
            </AddButton>
          </div>
        </div>
      </div>
      </div>
    </Container>
  );
}


