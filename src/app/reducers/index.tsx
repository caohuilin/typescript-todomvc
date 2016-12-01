import { combineReducers } from 'redux';
import todos, { TodoState } from './todos';
export * from './todos'

export type State = {
  todos: TodoState
}

const rootReducer = combineReducers({
  todos
});

export default rootReducer;
