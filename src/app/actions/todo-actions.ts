import { TodoActionTypes } from './todo-actions-constants';
import { ITodo } from '../interfaces/index';
import { ActionWithPayload } from '../app-actions';

export class AddTodoAction implements ActionWithPayload {
    readonly type = TodoActionTypes.ADD_TODO;
    constructor(public payload: string) { }
}

export class SendErrorAction implements ActionWithPayload {
    readonly type = TodoActionTypes.ERROR_EMPTY;
    constructor(public payload: string) { }
}

export class ClearErrorsAction implements ActionWithPayload {
    readonly type = TodoActionTypes.CLEAR_ERROR;
    constructor(public payload: any) { }
}

export class RemoveTodoAction implements ActionWithPayload {
    readonly type = TodoActionTypes.REMOVE_TODO;
    constructor(public payload: number) { }
}

export class SetTodoCompletedAction implements ActionWithPayload {
    readonly type = TodoActionTypes.SET_TODO_COMPLETED;
    constructor(public payload: {}) { }
}

export class SetAllTodoCompletedAction implements ActionWithPayload {
    readonly type = TodoActionTypes.SET_ALL_TODO_COMPLETED;
    constructor(public payload: boolean) { }
}

export class UpdateTodoLabelAction implements ActionWithPayload {
    readonly type = TodoActionTypes.UPDATE_TODO_LABEL;
    constructor(public payload: {}) { }
}

export class ClearCompletedAction implements ActionWithPayload {
    readonly type = TodoActionTypes.CLEAR_COMPLETED;
    constructor(public payload: null) { }
}

export class ShowAllAction implements ActionWithPayload {
    readonly type = TodoActionTypes.SHOW_ALL;
    constructor(public payload: null) { }
}

export class ShowActiveAction implements ActionWithPayload {
    readonly type = TodoActionTypes.SHOW_ACTIVE;
    constructor(public payload: null) { }
}

export class ShowCompletedAction implements ActionWithPayload {
    readonly type = TodoActionTypes.SHOW_COMPLETED;
    constructor(public payload: null) { }
}

export type TodoAction
    = AddTodoAction
    | SendErrorAction
    | ClearErrorsAction
    | RemoveTodoAction
    | SetTodoCompletedAction
    | SetAllTodoCompletedAction
    | UpdateTodoLabelAction
    | ClearCompletedAction
    | ShowAllAction
    | ShowActiveAction
    | ShowCompletedAction;
