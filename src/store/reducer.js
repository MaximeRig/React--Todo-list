// == Initial State
const initialState = {
  tasksList: [
    {
      id: 0,
      title: 'tache 1',
    },
    {
      id: 1,
      title: 'tache 2',
    },
  ],
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

      // Generate an id to a new task
      // Retrieve all task ids in an array
      const allIds = tasksList.map(currentTask => currentTask.id);
      // Find the biggest id in allIds
      const biggestId = Math.max(...allIds); // dump every index of allIds array in max() method directly
      // New id
      const newId = biggestId + 1;

      // new task
      const newTask = {
        id: newId,
        title: inputValue,
      };

      // new tasksList
      const newTasksList = [
        ...tasksList,
        newTask,
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
