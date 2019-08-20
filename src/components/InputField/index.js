// NPM import
import React from 'react';
import PropTypes from 'prop-types';

// locals imports
import './inputField.scss';

// components
const InputField = ({ addTask, onChangeInput, inputValue }) => {

  // callback from form onSubmit event
  const onSubmitHandler = (event) => {
    // stop submit event propagation
    event.preventDefault();
    addTask();
  };

  // callbakc from input onChange event
  const changeHandler = (event) => {
    const { value } = event.target;
    onChangeInput(value);
  };
  return (
    <form onSubmit={onSubmitHandler} className="form">
      <input onChange={changeHandler} value={inputValue} className="form-input" type="text" placeholder="Soumettre une nouvelle tâche" />
    </form>
  );
};

// Validation
InputField.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

// export
export default InputField;
