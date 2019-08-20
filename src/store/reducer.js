// == Initial State
const initialState = {
  tasksList: [],
  taskNumber: 0,
  inputValue: '',
};

// == Types
const CHANGE_INPUT = 'CHANGE_INPUT';
const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const DONE_TASK = 'DONE_TASK';

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
      // If allIds is an empty array (no task), biggestId = 0
      const biggestId = allIds.length > 0 ? Math.max(...allIds) : 0; // dump every index of allIds array in max() method directly

      // New id
      const newId = biggestId + 1;

      // new task
      const newTask = {
        id: newId,
        title: inputValue,
        done: false,
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

    case DELETE_TASK: {
      // Find the task to delete
      // Get actual tasks list
      const { tasksList } = state;
      // Get id to delete
      const { id: idToDelete } = action;
      // filter the tasksList width the id to delete
      const newTasksList = tasksList.filter(currentTask => (currentTask.id !== idToDelete));

      // remove 1 from tasksNumber
      const count = state.taskNumber - 1;

      // return new state
      return {
        ...state,
        taskNumber: count,
        tasksList: newTasksList,
      };
    }

    case DONE_TASK: {
      // Get actual tasks list
      const { tasksList } = state;
      // Get id to change to done
      const { id } = action;
      // map on tasksList to change done property to true with the id
      const newTasksList = tasksList.map((currentTask) => {
        if (currentTask.id === id) {
          currentTask.done = true;
        }
        return currentTask;
      });
      // return new state
      return {
        ...state,
        tasksList: newTasksList,
      };
    }

    default:
      return state;
  }
};

// == Action Creators
export const onChangeInput = value => ({
  type: CHANGE_INPUT,
  inputValue: value,
});

export const addNewTask = () => ({
  type: ADD_TASK,
});

export const deleteTask = id => ({
  type: DELETE_TASK,
  id,
});

export const doneTask = id => ({
  type: DONE_TASK,
  id,
});

// == Selectors


// == Export
export default reducer;
