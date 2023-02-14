import './ToDoContainer.css';
import ToDoInput from '../components/toDo/ToDoInput';
import ToDoList from '../components/toDo/ToDoList';

export default function ToDoContainer() {
  return (
    <div className="todoContainer">
      <h3>To-do List</h3>
      <p>
        Press Enter key to log an item to the list.
        Click the delete icon once you are ready to remove the task from the list!
      </p>
      <ToDoInput />
      <ToDoList />
    </div>
  );
}