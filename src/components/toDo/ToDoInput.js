import './ToDoInput.css';
import { useToDoListContext } from './ToDoListContext';
import { useState } from 'react';

export default function ToDoInput() {
    const [input, setInput] = useState(null);
    const { listState, setListState } = useToDoListContext();

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