import React ,{Component} from 'react';
import PropTypes from 'prop-types';

export default class Todo extends Component{
    render(){
        return (
            <li
                onClick={this.props.onClick}>
                style={{
                    textDecoration:this.props.completed ? 'line-throught':'none',
                    cursor:this.props.completed ? 'default':'pointer'
            }}>
                {this.props.text}
            </li>
        )
    }
}

Todos.propTypes = {
    onClick:PropTypes.func.isRequired,
    text:PropTypes.string.isRequired,
    completed:PropTypes.bool.isRequired
}