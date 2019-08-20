// import npm
import React from 'react';
import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';

// local import
import './list.scss';

// component
const Task = ({ title, deleteTask }) => {

  return (
    <li className="list-item">{title}<MdDeleteForever onClick={deleteTask} className="list-item--delete" /></li>
  );
};

// props validation
Task.propTypes = {
  title: PropTypes.string.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

// export default
export default Task;
