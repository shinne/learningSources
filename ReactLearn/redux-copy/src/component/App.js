import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter,VisibilityFilters } from './actions';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
    render(){
        const { dispatch, visibleTodos, visibilityFilter} = this.props;
        return(
            <div>
                <AddTodo onAddClick={text =>
                    dispatch(addTodo(text))
                }/>
                <TodoList todos={visibleTodos}
                          onTodoClick={index =>
                            dispatch(completeTodo(index))
                  }/>
                <Footer filter={visibilityFilter}
                        onFilterChange={nextFilter =>
                            dispatch(setVisibilityFilter(nextFilter))
                        } />

            </div>
        )
    }
}

App.propTypes = {
    visibleTodos:PropTypes.arrayOf(PropTypes.shape({
        text:PropTypes.string.isRequired,
        completed:PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibilityFilter:PropTypes.oneOf([
        "SHOW_ALL",
        "SHOW_COMPLETED",
        "SHOW_ACTIVE"
    ]).isRequired
};

function selectTodos(todos, filter) {
    switch (filter){
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLTED:
            return todos.filter(todo => todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
    }
}

function select(state) {
    return {
        //this.props.visibleTodos与 selectTodos()的返回值绑定，
        //因此当state.visibilityFilter或者state.todos改变时，有可能return的返回值也会改变
        //最终导致todoList的改变
        visibleTodos:selectTodos(state.todos, state.visibilityFilter),
        //这里的props.visibilityFilter与state.visibilityFilter绑定，当使用dispatch(setVisibilityFilter(nextFilter)
        //方法时，state.visibilityFilter更改导致visibilityFilter更改，就导致footer.filter的更改，
        //最终导致render的视图更改
        visibilityFilter:state.visibilityFilter
    }
}

export default connect(select)(App)