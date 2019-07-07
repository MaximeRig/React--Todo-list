// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import CountTodos from 'src/components/CountTodos';


const mapStateToProps = (state) => {
  return {
    taskNumber: state.taskNumber,
  };
};


const mapDispatchToProps = {};

// Container
const CountTodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountTodos);

// == Export
export default CountTodosContainer;
