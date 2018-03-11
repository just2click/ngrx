import { todosReducer } from './todos.reducers';
import { combineReducers } from '@ngrx/store';

const reducers = {
    todos: todosReducer
};

const combinedReducers = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return combinedReducers(state, action);
}
