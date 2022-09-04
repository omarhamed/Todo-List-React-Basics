import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <div className="todos-list">
      {props.todos.length > 0 ? (
        props.todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onChangeCompletion={props.onChangeCompletion}
              onDeleteTodo={props.onDeleteTodo}
              onEditTodo={props.onEditTodo}
            />
          );
        })
      ) : (
        <h2 className="no-todos">No Tasks Found...</h2>
      )}
    </div>
  );
};

export default Todos;
