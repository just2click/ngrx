import { Observable } from 'rxjs/Observable';
import { ActionReducer } from '@ngrx/store';
import '@ngrx/core/add/operator/select';
// For composing any number of functions in a chain.
// It takes  value and executes each of the composed functions
// with it thus returning the final outcome back.
import { compose } from '@ngrx/store';
// to prevent accidental state mutations
import { storeFreeze } from 'ngrx-store-freeze';
// Like the above `compose` this function takes all reducers and
// combines them into one meta-reducer that encompasses the
// whole application state. In some way reducers resemble tables
// and combineReducers acts like a database.
import { combineReducers } from '@ngrx/store';
import * as todosSubStates from './sub-states';

export interface IAppState {
    todosState: todosSubStates.ITodosState;
}

const reducers = {

};
