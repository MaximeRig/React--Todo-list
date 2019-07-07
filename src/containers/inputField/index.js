// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import InputField from 'src/components/InputField';

// Action Creators
import { onChangeInput } from 'src/store/reducer';


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
  };
};

// Container
const InputFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputField);

// == Export
export default InputFieldContainer;
