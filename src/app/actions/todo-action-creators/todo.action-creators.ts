import { Injectable } from '@angular/core';

import * as todos from '../todo-actions';
import { ITodo } from '../../interfaces';

@Injectable()
export class TodoActions {
    public addTodo (payload: ITodo) {
        return new todos.AddTodoAction(payload);
    }

    public sendError (payload: string) {
        return new todos.SendErrorAction(payload);
    }

    public clearErrors () {
        return new todos.ClearErrorsAction();
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

    public clearCompleted () {
        return new todos.ClearCompletedAction();
    }

    public showAll () {
        return new todos.ShowAllAction();
    }

    public showActive () {
        return new todos.ShowActiveAction();
    }

    public showCompleted () {
        return new todos.ShowCompletedAction();
    }
}
