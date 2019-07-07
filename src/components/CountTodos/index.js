// NPM import
import React from 'react';
import PropTypes from 'prop-types';

// locals imports
import './countTodos.scss';

// components
const CountTodos = ({ taskNumber }) => (
  <div className="count">
    {taskNumber} tâche(s) en cours
  </div>
);

// Validation
CountTodos.propTypes = {
  taskNumber: PropTypes.number.isRequired,
};

// export
export default CountTodos;
