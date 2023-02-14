import './ToDoContainer.css';
import ToDoList from '../components/toDo/ToDoList';
import ToDoInput, { ToDoListContext } from '../components/toDo/ToDoInput';
import { useState } from 'react';

export default function ToDoContainer() {
  // list of todos: {id: <num>, task: <string>, done: <bool>}
  const [listState, setListState] = useState([]);
  return (
    <div className="todoContainer">
      <h3>To-do List</h3>
      <p>
        Press Enter key to log an item to the list.
        Click the delete icon once you are ready to remove the task from the list!
      </p>
      <ToDoListContext.Provider value={{ listState, setListState }}>
        <ToDoInput />
        <ToDoList />
      </ToDoListContext.Provider>
    </div>
  );
}