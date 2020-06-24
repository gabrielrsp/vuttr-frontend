import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import SignUp from '../../pages/Signup';

const mockedHistoryPush = jest.fn();
const mockedDispatch = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: () => mockedHistoryPush
    }),
    Link: ({ children }) => children
  };
})

jest.mock('react-redux', () => {
  return {
    useDispatch: () => mockedDispatch,
    Provider: ({ children }) => children
  };
})

describe('Signup Page', () => {
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

    await wait(() => { expect(mockedDispatch).toHaveBeenCalledWith({ "payload": { "name": "john", "email": "johndoe@example.com", "password": "123456" }, "type": "@auth/SIGN_UP_REQUEST" }) })

  })
})
