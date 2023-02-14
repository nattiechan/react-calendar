import './ToDoInput.css';
import { createContext, useContext, useState } from 'react';

export const ToDoListContext = createContext(null);

export default function ToDoInput() {
    const [input, setInput] = useState(null);
    const { listState, setListState } = useContext(ToDoListContext);

    const handleChange = (e) => setInput(e.target.value);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setListState([...listState, { 'id': listState.length, 'task': input, 'done': false }]);
            e.target.value = '';
        }
    };

    return (
        <form>
            <input type='text' placeholder='Jot something down...' onChange={handleChange} onKeyDown={handleKeyDown} />
        </form>
    );
}