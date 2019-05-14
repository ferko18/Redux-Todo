import {  ADD_TASK, TOGGLE_TODO } from  '../Actions'

const initialState = {
  todos: [
    { task: "go surfing", completed: false },
    { task: "apply for jobs", completed: false}
  ]
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, { task: action.payload, completed: false }]
      };
      case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.task === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };
    default:
      return state;
  }
}
export default reducer;
