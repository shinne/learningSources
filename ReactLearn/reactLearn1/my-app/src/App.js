import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import BookList from "./components/BookList";

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          books:[]
      }
  }

  clickFn(index,book){
        alert('序号：' + (index+1) + "书名：" + book.name + "出版社：" + book.from);
  }
  addBookFn(name,from){
      var books = [...this.state.books];
      books.push({
          name:name,
          from:from
      })
      this.setState({
        books:books
      });
  }
  render() {
    var books = [...this.state.books];
    return (
      <div className="App">
          <AddBook onAddBook = {(name,from) => this.addBookFn(name,from)}/>
          <BookList books = {books} onClick={(index,book) => this.clickFn(index,book) }/>
      </div>
    );
  }
}

export default App;
