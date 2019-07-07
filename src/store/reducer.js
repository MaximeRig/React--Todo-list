// == Initial State
const initialState = {
  tasksList: [],
  taskNumber: 0,
  inputValue: '',
};

// == Types
const CHANGE_INPUT = 'CHANGE_INPUT';
const ADD_TASK = 'ADD_TASK';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        inputValue: action.inputValue,
      };

    case ADD_TASK: {
      // Retrieve inputValue from the state
      const { inputValue } = state;

      // Retrieve actual tasks
      const { tasksList } = state;

      // new tasksList
      const newTasksList = [
        ...tasksList,
        inputValue,
      ];

      // Add 1 to tasksNumber
      const count = state.taskNumber + 1;

      // return new state
      return {
        ...state,
        taskNumber: count,
        tasksList: newTasksList,
        inputValue: '',
      };
    }

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

export const addNewTask = () => {
  return {
    type: ADD_TASK,
  };
};

// == Selectors


// == Export
export default reducer;
