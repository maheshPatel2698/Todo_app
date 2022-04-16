import React, { useContext } from "react";
import "../Css/TodoItem.css";
import TodoContext from "../context/TodoContext";
import { Remove_Todo } from "../context/action.type";

const TodoItem = () => {
  const { todos, dispatch } = useContext(TodoContext);
  return (
    <>
      {todos.map((todo) => (
        <div  className="todoitem" key={todo.id}>
          <h5>{todo.title}</h5>
          <h3>{todo.desc}</h3>
          <button
            onClick={() =>
              dispatch({
                type: Remove_Todo,
                payload: todo.id,
              })
            }
            className="btn btn-danger"
          >
            Remove Todo
          </button>
        </div>
      ))}
    </>
  );
};

export default TodoItem;
