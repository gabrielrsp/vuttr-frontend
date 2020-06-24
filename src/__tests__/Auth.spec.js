import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import SignUp from '../pages/Signup';
import Signin from '../pages/Signin';

import reducer, { INITIAL_STATE } from '../store/modules/auth/reducer';
import * as  AUTH from '../store/modules/auth/actions';

const mockedHistoryPush = jest.fn();
const mockedDispatch = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: () => mockedHistoryPush
    }),
    Link: ({ children }) => children
  };
});

jest.mock('react-redux', () => {
  return {
    useSelector: jest.fn(),
    useDispatch: () => mockedDispatch,
    Provider: ({ children }) => children
  };
});

describe('Signup Dispatch function', () => {
  it('should be able to dispatch signup action', async () => {
    const { getByPlaceholderText, getByText } = render(<SignUp />)

    const nameField = getByPlaceholderText('Name');
    const emailField = getByPlaceholderText('E-mail');
    const passwordField = getByPlaceholderText('Password');
    const buttonElement = getByText('Create account');

    fireEvent.change(nameField, { target: { value: 'john' } });
    fireEvent.change(emailField, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });

    fireEvent.click(buttonElement)

    await wait(() => {
      expect(mockedDispatch).toHaveBeenCalledWith(
        {
          "payload":
            { "name": "john", "email": "johndoe@example.com", "password": "123456" },
          "type": "@auth/SIGN_UP_REQUEST"
        })
    })
  });
});

describe('Signin Dispatch function', () => {
  it('should be able to dispatch signin action', async () => {
    const { getByPlaceholderText, getByText } = render(<Signin />)

    const emailField = getByPlaceholderText('E-mail');
    const passwordField = getByPlaceholderText('Password');
    const buttonElement = getByText('Access');

    fireEvent.change(emailField, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });

    fireEvent.click(buttonElement)
    await wait(() => { expect(mockedDispatch).toHaveBeenCalledWith({ "payload": { "email": "johndoe@example.com", "password": "123456" }, "type": "@auth/SIGN_IN_REQUEST" }) })

  });
});

describe('Signin Request Reducer', () => {
  it('should call signin reducer changing loading state to true', () => {
    const state = reducer(INITIAL_STATE, AUTH.signInRequest())
    expect(state).toStrictEqual({ "loading": true, "signed": false, "token": null })
  });
});


