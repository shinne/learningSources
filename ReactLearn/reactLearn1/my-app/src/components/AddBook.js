import React,{Component} from 'react';
import PropTypes from 'prop-types';

class AddBooks extends  Component{
    render(){
        return (
            <div>
                <label>书名</label>
                <input type="text" ref = 'bookName'/>
                <label>出版社</label>
                <input type="text" ref = 'bookFrom'/>
                <button onClick = {(e) => this.addBook(e)}>
                    添加书籍
                </button>
            </div>
        )
    }

    addBook(e){
        const name = this.refs.bookName.value.trim();
        const from = this.refs.bookFrom.value.trim();
        this.props.onAddBook(name,from);
    }
}

AddBooks.propTypes = {
    onAddBook: PropTypes.func.isRequired
}
export default AddBooks;
