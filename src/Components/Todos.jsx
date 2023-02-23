import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from './Todo';
const Todos = () => {
  const {todos} = useSelector((state) => state);
    const inpRef = useRef(null)
    const dispatch = useDispatch()
    function handelAddTodo(e) {
        e.preventDefault()
        dispatch({type: "ADD_TODO", payload: inpRef.current.value})
    }
  return (
    <section className="d-flex w-100 flex-column gap-5 align-items-center py-4">
      <h1 className="display-1 fw-bold">Todos</h1>
      <form className="d-flex w-75" onSubmit={handelAddTodo}>
        <input type="text" className="w-75 py-3 fs-3 px-2" ref={inpRef}/>
        <button className="w-25 py-2 btn btn-primary rounded-0 fs-3 ">
          Add
        </button>
      </form>
      <Todo/>
    </section>
  );
};

export default Todos;
