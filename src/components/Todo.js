import React, {  useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import {BiCheck} from 'react-icons/bi'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo,setTodos }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  const onBtnCheck =((id) => {
        setTodos((prevState) =>
        prevState.map((todo) => 
        todo.id === id ? { ...todo, isComplete: true } : todo)); 
        todos.sort(function(a,b){return a.isComplete-b.isComplete});
        console.log(todos);
        
    });
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <BiCheck className="checkbutton"
        onClick={()=>onBtnCheck(todo.id)}
        />
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;
