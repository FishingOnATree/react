import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import { Book } from './objects';
import {DebounceInput} from 'react-debounce-input';
import BookDisplay from './BookDisplay';
import * as BooksAPI from './BooksAPI'

const DEFAULT_SHELF = "none";

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.addBook = this.addBook.bind(this);
  }

  state = {
    books: [],
    totalFound: 0
  }

  addBook(book, srcShelf, toShelf) {
    //src is always "none", which is ignored by addBook.
    this.props.addBook(book, toShelf);
    this.setState((currentState) => ({
        books: currentState.books.filter(x => (!this.props.hasBook(x)))
    }));
  }

  handleSearch(terms) {
    if (terms.length === 0) {
      this.setState(() => ({books: []}));
    } else if (terms.length >= 3) {
      console.log(terms);
      let promise = BooksAPI.search(terms);
      promise.then((fulfilled) => {
        console.log(fulfilled);
        let books = fulfilled.map(x => Book.parse(x));
        this.setState(() => ({books: books.filter(x => (!this.props.hasBook(x))), totalFound: books.length}));
      }).catch(function (error) {
        console.log(error);
      });
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
            <DebounceInput
              debounceTimeout={300}
              placeholder="Search by title or author. Input at least 3 characters"
              onChange={event => this.handleSearch(event.target.value.trim())}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books
              .map((book) => (
                <BookDisplay
                  key={book.id}
                  book={book}
                  bookMover={this.addBook}
                  bookshelf={DEFAULT_SHELF}
                  bookshelfList={this.props.bookshelfList}
                />
              ))
            }
          </ol>
        </div>
        <div className="search-info">
          Search completed at <b>{(new Date()).toString()}</b> <br />
          Books found by search: <b>{this.state.totalFound}</b>. <br />
          Books already on shelf and hidden: {this.state.totalFound - this.state.books.length}
        </div>
      </div>
    )
  }
}

BookSearch.propTypes = {
  addBook: PropTypes.func.isRequired,
  hasBook: PropTypes.func.isRequired,
  bookshelfList: PropTypes.array.isRequired
}
export default BookSearch;
