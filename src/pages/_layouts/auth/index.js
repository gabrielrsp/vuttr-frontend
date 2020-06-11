import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper id="auth">
      <Content>
        {children}
      </Content>
    </Wrapper>
  );
}
AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
