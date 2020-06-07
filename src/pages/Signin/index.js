import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('You need to pass a email'),
  password: Yup.string()
    .required('Password is required')
});

export default function Signin() {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }


  return (
    <>
      <img src={logo} alt="vuttr" width={'42%'} />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Password" />
        <button type="submit">{loading ? 'Loading...' : 'Access'}</button>
        <Link to="/register">Create free account</Link>
      </Form>
    </>
  );
}
