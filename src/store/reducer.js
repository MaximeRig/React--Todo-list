// == Initial State
const initialState = {
  tasksList: [],
  inputValue: '',
};

// == Types
const CHANGE_INPUT = 'CHANGE_INPUT';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        inputValue: action.inputValue,
      };

    default:
      return state;
  }
};

// == Action Creators
export const onChangeInput = (value) => {
  return {
    type: CHANGE_INPUT,
    inputValue: value,
  };
};

// == Selectors


// == Export
export default reducer;
