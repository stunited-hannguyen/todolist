import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

TodoList.propTypes = {
  todo: PropTypes.array,
  setTodo: PropTypes.func,
  setTextInput : PropTypes.func,
};

function TodoList(props) {
  const { todo, setTodo ,setTextInput ,onCheckBtnClick} = props;
  return (
    <div className="todolist">
      <ul>
        {todo.map((todos) => (
          <Todo
            text={todos.name}
            key={todos.id}
            todo={todo}
            todos={todos}
            setTodos={setTodo}
            setTextInput={setTextInput}
            onCheckBtnClick={onCheckBtnClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
