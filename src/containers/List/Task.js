// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Task from 'src/components/List/Task';

// Action Creators
import { deleteTask, doneTask } from 'src/store/reducer';


const mapStateToProps = null;


const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteTask: () => {
    // Retrieve id from props in Task
    const { id } = ownProps;
    dispatch(deleteTask(id));
  },
  doneTask: () => {
    // Retrieve id from props in Task
    const { id } = ownProps;
    dispatch(doneTask(id));
  },
});

// Container
const TaskContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Task);

// == Export
export default TaskContainer;
