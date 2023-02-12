import './ToDo.css';
import Checkbox from '../checkbox/Checkbox';
import { Delete } from '../delete/Delete'
import ToDoInput, { ToDoListContext } from '../todoInput/ToDoInput';
import { useState, useContext } from 'react';

export default function ToDo() {
  // list of todos: {id: <num>, task: <string>, done: <bool>}
  const [listState, setListState] = useState([]);
  return (
    <div className="todo">
      <h3>To-do List</h3>
      <p>
        Press Enter key to log an item to the list.
        Click the delete icon once you are ready to remove the task from the list!
      </p>
      <ToDoListContext.Provider value={{ listState, setListState }}>
        <ToDoInput />
        <List />
      </ToDoListContext.Provider>
    </div>
  );
}

function List() {
  const { listState, setListState } = useContext(ToDoListContext);
  const handleDelete = (deletedEntry) => setListState(listState.filter(entry => entry.id !== deletedEntry.id));
  const handleCheckBoxChange = (entry) => {
    setListState(listState.map(listEntry => listEntry.id === entry.id ? { ...listEntry, 'done': !listEntry.done } : listEntry));
  }

  const todoList = listState.map(entry => (
    <li className='todoList' key={entry.id}>
      <Checkbox handleClick={() => handleCheckBoxChange(entry)} defaultChecked={entry.done} />
      <span style={{ textDecoration: entry.done ? "line-through" : null }}>{entry.task}</span>
      <Delete handleClick={() => handleDelete(entry)} />
    </li>
  ));
  return (
    <ul>
      {todoList}
    </ul>
  );
}
