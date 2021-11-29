import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

const InputTextbox = ({ classes, name, onChange, onKeyPress, placeholder, type, value }) => (
  <input
    autoCapitalize="off"
    className={classNames('input-textbox-container', classes)}
    name={name}
    onChange={onChange}
    onKeyPress={onKeyPress}
    placeholder={placeholder}
    type={type}
    value={value}
  />
);

InputTextbox.propTypes = {
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
};

export default InputTextbox;
