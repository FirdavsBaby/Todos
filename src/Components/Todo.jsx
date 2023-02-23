import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Todo = ({}) => {
  const { todos } = useSelector(({ todos }) => todos);
    const dispatch = useDispatch();
  function handelRemoveTodo(id) {
    
     dispatch({ type: "REMOVE_TODO", payload: id });
  }
  return (
    <ul id="todos" className="w-100 d-flex flex-column align-items-center fs-2 gap-2">
      {todos.map((t) => (
        <li
          className="w-50 p-2 border border-4 border-primary rounded-3 d-flex justify-content-between"
          key={t.id}
        >
          {t.title}
          <button className="btn btn-danger px-3" onClick={()=>handelRemoveTodo(t.id)}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
