import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import BookshelfDisplay from './BookshelfDisplay';
import BookSearch from './BookSearch';
import {Book, Library} from './objects.js';
import { Link, Route, Switch } from 'react-router-dom';

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
        let book = Book.parse(x);
        let shelf = x['shelf'];
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
    BooksAPI.update(book, toShelf).then((result) => {
      this.state.library.moveBook(book, fromShelf, toShelf);
      this.setState((currentState) => ({library: currentState.library}));
    });
  }

  addBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((result) => {
      this.state.library.addBook(book, shelf);
      this.setState((currentState) => ({library: currentState.library}));
    });
  }

  hasBook = (book) => {
    return this.state.library.hasBook(book);
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/search' render = {({ history} ) => (
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
                <Link to='/search'>Add a book</Link>
              </div>
            </div>
          )} />
          <Route path='*' render= {() =>(
            <h1>404 - Page not found</h1>
          )} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
