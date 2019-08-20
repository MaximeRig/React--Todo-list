// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import List from 'src/components/List';

// Action Creators
// import { onChangeInput, addNewTask } from 'src/store/reducer';


const mapStateToProps = state => ({
  tasksList: state.tasksList,
});


const mapDispatchToProps = {};

// Container
const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

// == Export
export default ListContainer;
