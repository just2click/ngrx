import {Action} from '@ngrx/store';

import { TodoActionTypes } from './todo-actions-constants';
import { ITodo } from '../interfaces/index';

export class AddTodoAction implements Action {
    readonly type = TodoActionTypes.ADD_TODO;

    constructor(public payload: ITodo) { }
}

export class SendErrorAction implements Action {
    readonly type = TodoActionTypes.ERROR_EMPTY;
    constructor(public payload: string) { }
}

export class ClearErrorsAction implements Action {
    readonly type = TodoActionTypes.CLEAR_ERROR;
    constructor() { }
}

export class RemoveTodoAction implements Action {
    readonly type = TodoActionTypes.REMOVE_TODO;
    constructor(public payload: number) { }
}

export class SetTodoCompletedAction implements Action {
    readonly type = TodoActionTypes.SET_TODO_COMPLETED;
    constructor(public payload: {}) { }
}

export class SetAllTodoCompletedAction implements Action {
    readonly type = TodoActionTypes.SET_ALL_TODO_COMPLETED;
    constructor(public payload: boolean) { }
}

export class UpdateTodoLabelAction implements Action {
    readonly type = TodoActionTypes.UPDATE_TODO_LABEL;
    constructor(public payload: {}) { }
}

export class ClearCompletedAction implements Action {
    readonly type = TodoActionTypes.CLEAR_COMPLETED;
}

export class ShowAllAction implements Action {
    readonly type = TodoActionTypes.SHOW_ALL;
}

export class ShowActiveAction implements Action {
    readonly type = TodoActionTypes.SHOW_ACTIVE;
}

export class ShowCompletedAction implements Action {
    readonly type = TodoActionTypes.SHOW_COMPLETED;
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
