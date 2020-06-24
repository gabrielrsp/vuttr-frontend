import React from 'react';
import { render } from '@testing-library/react';
import Profile from '../pages/Profile';

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

describe('ModalAdd component', () => {
  it('should render profile input settings fields ', () => {
    const { getByPlaceholderText } = render(<Profile />)

    getByPlaceholderText('First name');
    getByPlaceholderText('Email Address');
    getByPlaceholderText('Current password');
    getByPlaceholderText('New password');
    getByPlaceholderText('Confirm password');

  })
})

