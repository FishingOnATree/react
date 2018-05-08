import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import Book from './objects';
import BookDisplay from './BookDisplay';
import * as BooksAPI from './BooksAPI'

class BookSearch extends Component {
  static propTypes = {
    addBook: PropTypes.func.isRequired,
    hasBook: PropTypes.func.isRequired,
    bookshelfList: PropTypes.array.isRequired
  }

  state = {
    books: []
  }

  addBook(book, shelf) {
      this.props.addBook(book, shelf);
      this.setState((currentState) => ({
          books: currentState.books.filter((b) => {
            return b.id !== book.id
          })
      }));
  }

  handleSearch(event) {
    var terms = event.target.value;
    console.log("key = " + terms);
    if (terms.length === 0) {
      this.setState(() => ({books: []}));
    } else if (terms.length >= 3) {
      console.log("searching");
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={this.handleSearch}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books
              .map((book) => (
                <BookDisplay
                  key={book.id}
                  book={book}
                  bookMover={this.props.bookMover}
                  bookshelf="none"
                  bookshelfList={this.props.bookshelfList}
                />
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch;
