// NPM import
import React from 'react';
import PropTypes from 'prop-types';

// locals imports
import './inputField.scss';

// components
const InputField = ({ onChangeInput, inputValue }) => {
  // callbakc from input onChange event
  const changeHandler = (event) => {
    const { value } = event.target;
    onChangeInput(value);
  };
  return (
    <form className="form">
      <input onChange={changeHandler} value={inputValue} className="form-input" type="text" />
    </form>
  );
};

// Validation
InputField.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

// export
export default InputField;
