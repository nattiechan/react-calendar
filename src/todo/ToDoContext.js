import { createContext, useContext } from 'react';
import { ADD_NEW_TASK, DELETE_TASK, TOGGLE_CHECKBOX } from './actionTypes';


export const initialState = { entryId: 1, entryList: [] };

export const ToDoContext = createContext(initialState);

export const useToDoContext = () => useContext(ToDoContext);

export function taskReducer(state, action) {
    switch (action.type) {
        case ADD_NEW_TASK: {
            const newEntryId = state.entryId + 1;
            return {
                entryId: newEntryId,
                entryList: [...state.entryList, { 'id': newEntryId, 'task': action.payload, 'done': false }]
            };
        }
        case DELETE_TASK: {
            return { ...state, entryList: state.entryList.filter(entry => entry.id !== action.payload) }
        }
        case TOGGLE_CHECKBOX: {
            const newEntryList = state.entryList.map(listEntry => listEntry.id === action.payload ? { ...listEntry, 'done': !listEntry.done } : listEntry);
            return { ...state, entryList: newEntryList };
        }
        default: { throw Error('Unknown action: ' + action.type); }
    }
}