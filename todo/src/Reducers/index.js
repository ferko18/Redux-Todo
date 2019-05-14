import {  ADD_TASK, } from  '../Actions'

const initialState = {
  todos: [
    { task: "go surfing", completed: false, id: 12345 },
    { task: "apply for jobs", completed: false, id: 12346 }
  ]
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, { task: action.payload, completed: false }]
      };

    default:
      return state;
  }
}
export default reducer;
