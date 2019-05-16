export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TODO = 'TOGGLE_TODO';


export const addTask=(newTask)=> {
  return {
    type: ADD_TASK,
    payload: newTask
  };
}

export const toggleTask = task => {
    return {
      type: TOGGLE_TODO,
      payload: task
    };
  };
  