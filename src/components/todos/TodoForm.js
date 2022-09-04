import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";

const TodoForm = (props) => {
  const [newTodo, setNewTodo] = useState("");

  // if (props.mode === "edit") {
  //   setNewTodo(props.todos[0].title);
  // }
  useEffect(() => {
    if (props.mode === "edit") {
      setNewTodo(props.todos[0].title);
    }
  }, [props.mode, props.todos]);

  let btnString = "Add";
  if (props.mode === "edit") {
    btnString = "Edit";
  }
  const NewTitleHandler = (event) => {
    setNewTodo(event.target.value);
  };
  return (
    <div className="todos-form">
      <div className="todos-form_icon" onClick={props.showUncompleteHandler}>
        <FeatherIcon icon="circle" size="24" />
      </div>
      <div className="todos-form_form">
        <input
          type="text"
          placeholder="Add New Task"
          value={newTodo}
          onChange={NewTitleHandler}
        />
      </div>
      <div className="todos-form_submit">
        <button
          className="btn"
          onClick={() => {
            props.onAddTodo(newTodo);
            setNewTodo("");
          }}
          disabled={newTodo.trim().length === 0}
        >
          {btnString}
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
