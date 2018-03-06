import { TodoAction } from '../actions';
import { TodoActionTypes } from '../actions/todo-actions-constants';


export function todosReducer (
    state: any,
    action: TodoAction
) {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO:
            return [{
                
            }] 
    }
};
