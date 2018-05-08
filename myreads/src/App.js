import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import BookshelfDisplay from './BookshelfDisplay';
import BookSearch from './BookSearch';
import {Book, Library} from './objects.js';
import { Link, Route } from 'react-router-dom';

const bookshelfList = [['currentlyReading', 'Currently Reading'],
                       ['wantToRead', 'Want to Read'],
                       ['read', 'Read']];

class BooksApp extends React.Component {
  state = {
    library: new Library(bookshelfList)
  }

  populateDefault() {
    const myLib = this.state.library;
    var promise = BooksAPI.getAll();
    promise.then((fulfilled) => {
      fulfilled.forEach((x) => {
        var book = new Book(x['id'], x['title'], x['authors'], x['imageLinks']['thumbnail']);
        var shelf = x['shelf'];
        myLib.addBook(book, shelf);
      });
      this.setState((currentState) => ({library: currentState.library}));
    }).catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    this.populateDefault();
  }

  moveBook = (book, fromShelf, toShelf) => {
    BooksAPI.update(book, toShelf);
    this.state.library.moveBook(book, fromShelf, toShelf);
    this.setState((currentState) => ({library: currentState.library}));
  }

  addBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    this.state.library.addBook(book, shelf);
    this.setState((currentState) => ({library: currentState.library}));
  }

  hasBook = (book) => {
    return this.state.library.hasBook(book);
  }

  render() {
    return (
      <div className="app">
        <Route path='/add' render = {({ history} ) => (
          <BookSearch
            addBook={this.addBook}
            hasBook={this.hasBook}
            bookshelfList={bookshelfList}
          />
        )} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {this.state.library.bookshelves
                  .map((bookshelf) => (
                    <BookshelfDisplay
                      key={bookshelf.key}
                      bookshelf={bookshelf}
                      bookshelfList={bookshelfList}
                      bookMover={this.moveBook}
                    />
                  ))
                }
              </div>
            </div>
            <div className="open-search">
              <Link to='/add'>Add a book</Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
