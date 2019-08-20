// NPM import
import React from 'react';
import PropTypes from 'prop-types';

// locals imports
import './countTodos.scss';

// components
const CountTodos = ({ taskInProgress, taskDone }) => (
  <React.Fragment>
    <div className="count">
      {taskInProgress} tâche(s) en cours
    </div>
    <div className="count">
      {taskDone} tâche(s) terminé(e)s
    </div>
  </React.Fragment>
);

// Validation
CountTodos.propTypes = {
  taskInProgress: PropTypes.number.isRequired,
  taskDone: PropTypes.number.isRequired,
};

// export
export default CountTodos;
