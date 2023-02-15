import './ToDoContainer.css';
import { taskReducer, initialState, ToDoContext } from './ToDoContext';
import { useReducer } from 'react';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';

/*
Ideally `useReducer` and `<Context>.Provider` can be encapsulated in a function
in `ToDoContext.js` that expects one child and invoked at the top level. 
However, the context is only required in the to-do list.
Since I need to pass the context to multiple children, it would be easier 
and more modular to have `useReducer` and `Provider` in this function
*/
export default function ToDoContainer() {
  const [listState, dispatch] = useReducer(taskReducer, initialState);

  return (
    <div className="todoContainer">
      <h3>To-do List</h3>
      <p>
        Press Enter key to log an item to the list.
        Click the delete icon once you are ready to remove the task from the list!
      </p>
      <ToDoContext.Provider value={[listState, dispatch]}>
        <ToDoInput />
        <ToDoList />
      </ToDoContext.Provider>
    </div>
  );
}