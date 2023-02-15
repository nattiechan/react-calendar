import './ToDoInput.css';
import { useToDoListContext } from './ToDoListContext';

export default function ToDoInput() {
    const { listState, setListState } = useToDoListContext();

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
                const newEntryId = listState.entryId + 1;
                setListState(
                    {
                        entryId: newEntryId,
                        entryList: [...listState.entryList, { 'id': newEntryId, 'task': e.target.value, 'done': false }]
                    }
                );
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