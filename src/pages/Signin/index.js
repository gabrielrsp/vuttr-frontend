import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('You need to pass a email'),
  password: Yup.string()
    .required('Password is required')
});

export default function Signin() {

  function handleSubmit(data) {

  }

  return (
    <>
      <img src={logo} alt="vuttr" width={'42%'} />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Password" />

        <button type="submit">Login</button>
        <Link to="/register">Create free account</Link>
      </Form>
    </>
  );
}
