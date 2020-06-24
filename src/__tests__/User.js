import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import Profile from '../pages/Profile';

import reducer, { INITIAL_STATE } from '../store/modules/user/reducer';
import * as  USER from '../store/modules/user/actions';

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

describe('update Profile Request Dispatch function', () => {
  it('should be able to dispatch signup action', async () => {
    const { getByPlaceholderText, getByText } = render(<Profile />)

    const nameField = getByPlaceholderText('First name');
    const emailField = getByPlaceholderText('Email Address');
    const currentPasswordField = getByPlaceholderText('Current password');
    const newPasswordField = getByPlaceholderText('New password');
    const confirmPasswordField = getByPlaceholderText('Confirm password');

    const buttonElement = getByText('Update Profile');

    fireEvent.change(nameField, { target: { value: 'john' } });
    fireEvent.change(emailField, { target: { value: 'johndoe@example.com' } });

    fireEvent.change(currentPasswordField, { target: { value: '' } });
    fireEvent.change(newPasswordField, { target: { value: '' } });
    fireEvent.change(confirmPasswordField, { target: { value: '' } });

    fireEvent.click(buttonElement)

    await wait(() => {
      expect(mockedDispatch).toHaveBeenCalledWith(
        {
          "payload": {
            "data": {
              "confirmPassword": "",
              "email": "johndoe@example.com",
              "name": "john",
              "oldPassword": "",
              "password": "",
            },
          },
          "type": "@user/UPDATE_PROFILE_REQUEST",
        })
    })

  });
});

describe('Update Profile Request Reducer', () => {
  it('should call profile reducer', () => {
    const state = reducer(INITIAL_STATE, USER.updateProfileRequest())
    expect(state).toStrictEqual({ "profile": null })
  });
});
