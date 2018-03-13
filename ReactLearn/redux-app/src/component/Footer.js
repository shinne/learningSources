import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Footer extends Component{
    render(){
        return(
            <p>
                SHOW:
                {' '}
                {this.renderFilter('SHOW_ALL','ALL')}
                {', '}
                {this.renderFilter('SHOW_COMPLETED','Completed')}
                {', '}
                {this.renderFilter('SHOW_ACTIVE','Active')}
                .
            </p>
        )
    }

    renderFilter(filter,name){
        if(filter === this.props.filter){
            return name
        }
        return (
            <a href="#" onClick={(e) =>{
                e.preventDefault();
                this.props.onFilterChange(filter);
            }}>
                {name}
            </a>
        )
    }

}