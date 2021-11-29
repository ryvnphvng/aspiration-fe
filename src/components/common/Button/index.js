import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

const Button = ({ children, classes, disabled, onClick, type = 'button' }) => (
  <button
    className={classNames('button-container', classes)}
    disabled={disabled}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string
};

export default Button;
