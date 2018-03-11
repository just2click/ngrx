import { TodoAction } from '../actions';
import { TodoActionTypes } from '../actions/todo-actions-constants';
import { ITodosState } from '../states/sub-states';
import { ITodo } from '../interfaces';


export function todosReducer (
    state: ITodosState['todos'],
    action: TodoAction
): ITodosState['todos'] {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO:
            const newTodo: ITodo = {
                id: state.reduce((id, todo) => (id > todo.id) ? id : todo.id, 0) + 1,
                isCompleted: false,
                label: action.payload
            };

            state = [newTodo, ...state];

            return state;
        case TodoActionTypes.REMOVE_TODO:
            state = state.filter( todo => action.payload !== todo.id);
            return state;

        case TodoActionTypes.SET_TODO_COMPLETED:
            return state = state.reduce((arr, todo) => {
                if (action.payload.id === todo.id) {
                    todo.isCompleted = action.payload.isCompleted;
                }
                arr.push(todo);
                return arr;
            }, []);

        case TodoActionTypes.UPDATE_TODO_LABEL:
            return state.reduce((arr, todo) => {
                if (action.payload.id === todo.id) {
                    todo.label = action.payload.label;
                }
                arr.push(todo);
                return arr;
            }, []);

        case TodoActionTypes.SET_ALL_TODO_COMPLETED:
            state = state.map(todo => {
                todo.isCompleted = action.payload;
                return todo;
            });
            return state;

        case TodoActionTypes.CLEAR_COMPLETED:
            return state.filter(todo => !todo.isCompleted);

        case TodoActionTypes.SHOW_ALL:
            return state.map(todo => todo);

        case TodoActionTypes.SHOW_ACTIVE:
            return state.filter(todo => todo.isCompleted);
        default:
            return state;
    }
}
