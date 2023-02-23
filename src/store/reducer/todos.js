// let todosArr = JSON.parse(localStorage.getItem("todosList") || "{ todos: [] }");
let todosArr = { todos: [] };

function todosReducer(state = todosArr, action) {
  switch (action.type) {
    case "ADD_TODO": {
      let newTodo = {
        ...state,
        todos: [
          ...state.todos,
          { title: action.payload, id: crypto.randomUUID() },
        ],
      };
      // localStorage.setItem("todosList", JSON.stringify(newTodo));
      return newTodo;
    }
    case "REMOVE_TODO": {
      let newTodo = {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      };
      // localStorage.setItem("todosList", JSON.stringify(newTodo));
      return newTodo;
    }
    default: {
      return state;
    }
  }
}
export default todosReducer;
