import React from 'react';
import { render } from '@testing-library/react';

import ModalAdd from '../components/ModalAdd';
import ModalEdit from '../components/ModalEdit';

describe('ModalAdd component', () => {
  it('should render add input fields ', () => {
    const { getByPlaceholderText } = render(<ModalAdd />)
    getByPlaceholderText('Tool title');
    getByPlaceholderText('Enter URL here');
    getByPlaceholderText('Description of the tool...');
    getByPlaceholderText('Tags');
  })
})

describe('ModalEdit component', () => {
  it('should render edit input fields', () => {
    const { getByPlaceholderText } = render(<ModalEdit />)
    getByPlaceholderText('Tool title');
    getByPlaceholderText('Enter URL here');
    getByPlaceholderText('Description of the tool...');
    getByPlaceholderText('Tags');

  })
})
