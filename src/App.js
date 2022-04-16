import React, { useReducer, useState } from "react";
import TodoContext from "./context/TodoContext";
import TodoReducer from "./context/Reducer";
import Todos from "./Components/Todos";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Css/App.css";
import TodoForm from "./Components/TodoForm";
import Warning from "./Components/Warning";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa"

const App = () => {
  const darkMode = () => {
    const element = document.getElementById("b2");
    element.classList.toggle("borderElement1");
    element.classList.toggle("neweffect");
    const border1 = document.getElementById("b1");
    border1.classList.toggle("borderElement2");
    const bodyElement = document.getElementById("body");
    bodyElement.classList.toggle("bodyeffect");
    

  };
  const getLocalData = () => {
    const list = localStorage.getItem("todos");
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };
  const [todos, dispatch] = useReducer(TodoReducer, getLocalData());
  const [Status] = useState(true);
  

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <div className="header">
        <h1 className="text-center">Todo App with Context Api</h1>
        <div className="buttonbody" id="b1">
          <div onClick={() => darkMode()} className="button" id="b2">
            {Status === true? <FaLightbulb />: <FaRegLightbulb/>}
          </div>
        </div>
      </div>

      <TodoForm />
     <Todos/>
    </TodoContext.Provider>
  );
};

export default App;
