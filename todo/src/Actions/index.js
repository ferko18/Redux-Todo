export const ADD_TASK = "ADD_TASK";

export function addTask(newTask) {
  return {
    type: ADD_TASK,
    payload: newTask
  };
}
