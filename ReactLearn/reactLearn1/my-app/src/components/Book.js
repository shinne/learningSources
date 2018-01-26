import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Book extends Component{
    render(){
        return (
        <li style={{cursor:"pointer"}} onClick ={this.props.alertFn}>书名：<b>{this.props.name}</b> 出版社：<b>{this.props.from}</b></li>
        )
    }
}

Book.propTypes = {
    name: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    alertFn:PropTypes.func.isRequired
}

export default Book;