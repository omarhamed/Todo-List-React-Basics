import React, { useState } from "react";
import Todos from "../components/todos/Todos";
import TodoForm from "../components/todos/TodoForm";

const TodoList = () => {
  // const initialState = [
  //   { id: 1, title: "play gym at 3PM", done: false },
  //   { id: 2, title: "play gym at 3PM", done: true },
  //   { id: 3, title: "play gym at 3PM", done: false },
  //   { id: 4, title: "play gym at 3PM", done: true },
  // ];

  const initialState = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  const setToLocal = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const [todos, setTodos] = useState(initialState);
  const [activeTodo, setActiveTodo] = useState({});
  const [mode, setMode] = useState("add");

  const changeTodoCompeletion = (id) => {
    const currTodos = [...todos];
    const newTodos = currTodos.map((element) => {
      if (element.id === id) {
        element.done = !element.done;
        return element;
      }
      return element;
    });
    setToLocal(newTodos);
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const currTodos = [...todos];
    const newTodos = currTodos.filter((element) => element.id !== id);
    setTodos(newTodos);
  };

  const addTodo = (title) => {
    if (mode !== "edit") {
      const newTodo = {
        id: Date.now(),
        title: title,
        done: false,
      };
      const newTodos = [...todos, newTodo];
      setToLocal(newTodos);
      setTodos(newTodos);
    } else {
      const curTodos = [...todos];
      const newTodos = curTodos.map((el) => {
        if (el.id === activeTodo.id) {
          el.title = title;
          return el;
        }
        return el;
      });
      setToLocal(newTodos);
      setTodos(newTodos);
      setActiveTodo({});
      setMode("add");
    }
  };

  const editTodo = (todo) => {
    setMode("edit");
    setActiveTodo(todo);
  };

  const showUncompleteHandler = () => {
    if (mode === "not-done") {
      setMode("add");
    } else {
      setMode("not-done");
    }
  };

  let currentTodos = [...todos];
  if (mode === "not-done") {
    currentTodos = currentTodos.filter((todo) => !todo.done);
  }

  return (
    <main>
      <div className="container">
        <div className="todos">
          <TodoForm
            onAddTodo={addTodo}
            showUncompleteHandler={showUncompleteHandler}
            todos={mode !== "edit" ? currentTodos : [activeTodo]}
            mode={mode}
          />
          <Todos
            todos={mode !== "edit" ? currentTodos : [activeTodo]}
            onChangeCompletion={changeTodoCompeletion}
            onDeleteTodo={deleteTodo}
            onEditTodo={editTodo}
          />
        </div>
      </div>
    </main>
  );
};

export default TodoList;
