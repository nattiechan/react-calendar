import './ToDoList.css';
import Checkbox from '../basicComponents/Checkbox';
import { Delete } from '../basicComponents/Delete';
import { useToDoListContext } from './ToDoListContext';

export default function ToDoList() {
  const { listState, setListState } = useToDoListContext();
  const handleDelete = (deletedEntry) => setListState({ ...listState, entryList: listState.entryList.filter(entry => entry.id !== deletedEntry.id) });
  const handleCheckBoxChange = (entry) => {
    const newEntryList = listState.entryList.map(listEntry => listEntry.id === entry.id ? { ...listEntry, 'done': !listEntry.done } : listEntry);
    console.log(newEntryList);
    setListState({ ...listState, entryList: newEntryList });
  }

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
