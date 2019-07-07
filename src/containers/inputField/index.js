// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import InputField from 'src/components/InputField';

// Action Creators
import { onChangeInput, addNewTask } from 'src/store/reducer';


const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    onChangeInput: (value) => {
      dispatch(onChangeInput(value));
    },
    addTask: () => {
      dispatch(addNewTask());
    },
  };
};

// Container
const InputFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputField);

// == Export
export default InputFieldContainer;
