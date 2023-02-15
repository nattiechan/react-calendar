import './ToDoInput.css';
import { ADD_NEW_TASK } from './actionTypes';
import { useToDoContext } from './ToDoContext';

export default function ToDoInput() {
    const [listState, dispatch] = useToDoContext();

    const handleChange = () => {
        const duplicateAlert = document.getElementById('duplicate');
        if (duplicateAlert.style.display === 'inline') duplicateAlert.style.display = 'none';
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const isDuplicateTask = listState.entryList.filter(entry => entry.task === e.target.value);
            if (isDuplicateTask.length > 0) {
                document.getElementById('duplicate').style.display = 'inline';
            } else {
                dispatch({ type: ADD_NEW_TASK, payload: e.target.value });
            }
            e.target.value = '';
        }
    };

    return (
        <form>
            <input type='text' placeholder='Jot something down...' onChange={handleChange} onKeyDown={handleKeyDown} />
            <span id='duplicate'>Task already on the list!</span>
        </form>
    );
}