import React,{Component} from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class BookList extends Component{
    render(){
        return (
            <ul>
                {this.props.books.map((book,index) =>
                    <Book {...book}
                          key={index}
                          alertFn = {() => this.props.onClick(index,book)}
                    />
                )}
            </ul>
            )
    }
}

BookList.propTypes = {
    books:PropTypes.arrayOf(PropTypes.shape({
        name:PropTypes.string.isRequired,
        from:PropTypes.string.isRequired,
    })),
    onClick:PropTypes.func.isRequired
}
export default BookList;
