// import npm
import React from 'react';
import PropTypes from 'prop-types';
import { MdDeleteForever, MdDone } from 'react-icons/md';
import classNames from 'classnames';

// local import
import './list.scss';

// component
const Task = ({
  title,
  deleteTask,
  doneTask,
  done,
}) => {
  // manage css class if the task is done or not
  const cssClassNames = classNames('list-item', {
    taskDone: done,
  });

  return (
    <li className={cssClassNames}>{title}<span><MdDone onClick={doneTask} className="list-item--done" /><MdDeleteForever onClick={deleteTask} className="list-item--delete" /></span></li>
  );
};

// props validation
Task.propTypes = {
  title: PropTypes.string.isRequired,
  deleteTask: PropTypes.func.isRequired,
  doneTask: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
};

// export default
export default Task;
