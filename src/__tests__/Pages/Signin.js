import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import Signin from '../../pages/Signin';

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
    useSelector: jest.fn(),
    useDispatch: () => mockedDispatch,
    Provider: ({ children }) => children
  };
})

describe('Signin Page',  ()  => {
  it('should be able to dispatch signin action', async () => {
    const { getByPlaceholderText, getByText } = render(<Signin />)

    const emailField = getByPlaceholderText('E-mail');
    const passwordField = getByPlaceholderText('Password');
    const buttonElement = getByText ('Access');

    fireEvent.change(emailField, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });

    fireEvent.click(buttonElement)
      await wait ( () => { expect(mockedDispatch).toHaveBeenCalledWith({"payload": {"email": "johndoe@example.com", "password": "123456"}, "type": "@auth/SIGN_IN_REQUEST"}) } )

  })
})
