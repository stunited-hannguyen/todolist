import { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { v4 } from "uuid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "35ch",
  },
}));
function App() {
  const classes = useStyles();
  const [todos, setTodos] = useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect(()=>{
    const storageTodo = localStorage.getItem("TODO")
    if(storageTodo){
      setTodos(JSON.parse(storageTodo))
    }
  },[])
  useEffect(()=>{
    localStorage.setItem('TODO',JSON.stringify(todos))
  },[todos])

  const onAddButton = () => {
    setTodos([{ id: v4(), name: textInput, isEditMode: false }, ...todos]);
    setTextInput("");
  };
  const onCheckBtnClick = useCallback(
    (id) => {
      setTodos((prevState) =>
        prevState.map((todo) =>
          todo.id === id ? { ...todo, isEditMode: true } : todo));
    },[todos]);

  return (
    <div className="container">
      <h1>TODO LIST</h1>
      <TextField
        className={classes.root}
        id="standard-basic"
        label="Enter things to do..."
        onChange={(e) => setTextInput(e.target.value)}
        value={textInput}
      />
      <Button variant="contained" color="primary" onClick={onAddButton}>
        {todos.isEditMode === true ? "UPDATE" : "ADD"}
      </Button>
      <TodoList
        todo={todos}
        setTodo={setTodos}
        setTextInput={setTextInput}
        onCheckBtnClick={onCheckBtnClick}
      />
    </div>
  );
}

export default App;
