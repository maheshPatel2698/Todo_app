import React, { useContext, useState, useEffect } from "react";
import "../Css/TodoForm.css";
import TodoContext from "../context/TodoContext";
import { Add_Todo } from "../context/action.type";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const TodoForm = () => {
  const { todos } = useContext(TodoContext);
  const { dispatch } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      toast.warning("Please Fill Up Form", {
        position: "top-center",
        autoClose: 500,
      });
      setTitle("");
      setDesc("");
    } else {
      const newTodo = {
        id: v4(),
        title: title,
        desc: desc,
      };
      dispatch({
        type: Add_Todo,
        payload: newTodo,
      });
      setTitle("");
      setDesc("");
      toast.success("Todo Added Successfully!", {
        position: "top-center",
        autoClose: 500,
      });
    }
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todoform">
      <h2 className="text-center">Todo Form</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label className="text-center" htmlFor="name">
          Add Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          id="t"
          type="text"
          placeholder="Add Title"
        />
        <br />
        <label className="text-center" htmlFor="desc">
          Add Description
        </label>
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          name="desc"
          id="d"
          type="text"
          placeholder="Add Description here"
        />
        <button className="btn btn-success m-2">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
