import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('You need to enter your name'),
  email: Yup.string()
    .email('Invalid email')
    .required('You need to pass an email adress'),
  password: Yup.string().min(6, 'password must be 6 characters at least')
    .required('Password is required')
});

export default function SignUp() {

  function handleSubmit(data) {

  }

  return (
    <>
      <img src={logo} alt="vuttr" width={'42%'} />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Name" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Password" />

        <button type="submit">Create account</button>
        <Link to="/">Already have an account</Link>
      </Form>
    </>
  );
}
