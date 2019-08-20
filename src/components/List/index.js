// NPM import
import React from 'react';
import PropTypes from 'prop-types';

import { MdDeleteForever } from 'react-icons/md';

// locals imports
import './list.scss';

// components
const List = ({ tasksList }) => (
  <ul className="list">
    {tasksList.map(currentTask => (
      <li key={currentTask} className="list-item">{currentTask}<MdDeleteForever className="list-item--delete" /></li>
    ))}
  </ul>
);

// props validation
List.propTypes = {
  tasksList: PropTypes.array.isRequired,
};

// export
export default List;
