import './ToDoList.css';
import Checkbox from '../components/Checkbox';
import { Delete } from '../components/Delete';
import { useToDoContext } from './ToDoContext';
import { DELETE_TASK, TOGGLE_CHECKBOX } from './actionTypes';

export default function ToDoList() {
  const [listState, dispatch] = useToDoContext();

  const handleDelete = (deletedEntry) => dispatch({ type: DELETE_TASK, payload: deletedEntry.id });
  const handleCheckBoxChange = (entry) => dispatch({ type: TOGGLE_CHECKBOX, payload: entry.id });

  const todoList = listState.entryList.map(entry => (
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
