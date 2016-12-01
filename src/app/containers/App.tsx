/// <reference path="../../../typings/index.d.ts" />

import * as React from 'react';
import { IDispatch } from '~react-redux~redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import { addTodo, deleteTodo, editTodo, completeTodo, completeAll, clearCompleted } from '../actions/index';
import { TodoState, State } from '../reducers';

const actions = {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
  completeAll,
  clearCompleted
};

interface IAppProps {
  todos?: TodoState;
  actions?: typeof actions;
}

interface IAppState { }

class App extends React.Component<IAppProps, IAppState> {
  render() {
    const {todos, actions} = this.props;
    return (
      <div>
        <Header
          addTodo={actions.addTodo}
          />
        <MainSection
          todos={todos}
          actions={actions}
          />
      </div>
    );
  }
}

function mapStateToProps(state: State) {
  return {
    todos: state.todos
  };
}


function mapDispatchToProps(dispatch: IDispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
