import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/Delete";

Todo.propTypes = {
  todo: PropTypes.array,
  setTodos: PropTypes.func,
  setTextInput: PropTypes.func,
};

function Todo(props) {
  const { todo, todos, text, setTodos, onCheckBtnClick } = props;

  const onDeleteClick = () => {
    setTodos(todo.filter((el) => el.id !== todos.id));
  };
  return (
    <li>
      <Button className={todos.isEditMode === true ? "text" : ""}>
        {text}
      </Button>
      <div>
        <Button onClick={() => onCheckBtnClick(todos.id)}>
          <CheckIcon
            color={todos.isEditMode === true ? "disabled" : "action"}
          ></CheckIcon>
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={onDeleteClick}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
    </li>
  );
}

export default Todo;
