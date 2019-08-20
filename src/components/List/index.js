// NPM import
import React from 'react';
import PropTypes from 'prop-types';

// locals imports
import './list.scss';
import Task from 'src/components/List/Task';

// components
const List = ({ tasksList }) => {

  return (
    <ul className="list">
      {tasksList.map(currentTask => (
        <Task key={currentTask.id} {...currentTask} />
      ))}
    </ul>
  );
};

// props validation
List.propTypes = {
  tasksList: PropTypes.array.isRequired,
};

// export
export default List;
