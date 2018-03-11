import { Injectable } from '@angular/core';

import * as todos from '../todo-actions';
import { ITodo } from '../../interfaces';

@Injectable()
export class TodoActions {
    public addTodo (payload: string) {
        return new todos.AddTodoAction(payload);
    }

    public sendError (payload: string) {
        return new todos.SendErrorAction(payload);
    }

    public clearErrors (payload: null) {
        return new todos.ClearErrorsAction(payload);
    }

    public removeTodo (payload: number) {
        return new todos.RemoveTodoAction(payload);
    }

    public setTodoCompleted (payload: any) {
        return new todos.SetTodoCompletedAction(payload);
    }

    public setAllTodoCompleted (payload: boolean) {
        return new todos.SetAllTodoCompletedAction(payload);
    }

    public clearCompleted (payload: null) {
        return new todos.ClearCompletedAction(payload);
    }

    public showAll (payload: null) {
        return new todos.ShowAllAction(payload);
    }

    public showActive (payload: null) {
        return new todos.ShowActiveAction(payload);
    }

    public showCompleted (payload: null) {
        return new todos.ShowCompletedAction(payload);
    }
}
