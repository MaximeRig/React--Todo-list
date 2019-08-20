// import npm
import React from 'react';
import PropTypes from 'prop-types';
import { MdDeleteForever, MdDone } from 'react-icons/md';

// local import
import './list.scss';

// component
const Task = ({ title, deleteTask, doneTask }) => {

  return (
    <li className="list-item">{title}<span><MdDone onClick={doneTask} className="list-item--done" /><MdDeleteForever onClick={deleteTask} className="list-item--delete" /></span></li>
  );
};

// props validation
Task.propTypes = {
  title: PropTypes.string.isRequired,
  deleteTask: PropTypes.func.isRequired,
  doneTask: PropTypes.func.isRequired,
};

// export default
export default Task;
