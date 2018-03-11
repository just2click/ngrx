import { ITodo } from '../../interfaces';
import { Observable } from 'rxjs/Observable';


export interface ITodosState {
    todos: any [];
    totalActive: number;
    errors: string [];
}

export const initialTodosState: ITodosState = {
    todos: [],
    totalActive: 0,
    errors: []
};

export function getTodos(state$: Observable<ITodosState>) {
    return state$.select(state => state.todos);
}

export function getTotalActive(state$: Observable<ITodosState>) {
    return state$.select(state => state.totalActive);
}

export function getErrors(state$: Observable<ITodosState>) {
    return state$.select(state => state.errors);
}


