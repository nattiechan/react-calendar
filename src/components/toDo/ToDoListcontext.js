import { createContext, useContext, useState } from 'react';

const ListContext = createContext();

export const useToDoListContext = () => useContext(ListContext);

export function ToDoListContext({ children }) {
    // list of todos: {id: <num>, task: <string>, done: <bool>}
    const [listState, setListState] = useState({ entryId: 0, entryList: [] });

    return (
        <ListContext.Provider value={{ listState, setListState }}>
            {children}
        </ListContext.Provider>
    );

}