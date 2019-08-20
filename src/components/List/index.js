// NPM import
import React from 'react';
import PropTypes from 'prop-types';

import { MdDeleteForever } from 'react-icons/md';

// locals imports
import './list.scss';

// components
const List = ({ tasksList }) => {

  /**
   * Todo : ajouter un id à chaque tâche ajouter pour pouvoir cibler une tache pour la supprimer ou la modifier
   */

  // handleClick to delete a task
  const handleClick = (event) => {
    // get the value to delete
    
  };

  return (
    <ul className="list">
      {tasksList.map(currentTask => (
        <li key={currentTask.id} className="list-item">{currentTask.title}<MdDeleteForever onClick={handleClick} className="list-item--delete" /></li>
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
