import './ToDoList.css';
import Checkbox from '../basicComponents/Checkbox';
import { Delete } from '../basicComponents/Delete';
import { ToDoListContext } from './ToDoInput';
import { useContext } from 'react';

export default function ToDoList() {
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
