import React, { Component } from 'react';
import BookMove from './BookMove.js';
import PropTypes from 'prop-types';

class BookDisplay extends Component {

  render() {
    const book = this.props.book;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.coverImageUrl})` }}
          />
          <BookMove
            book={book}
            bookMover={this.props.bookMover}
            bookshelf={this.props.bookshelf}
            bookshelfList={this.props.bookshelfList}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{Array.isArray(book.authors)?book.authors.join(', '):book.authors}</div>
        <div className="book-authors">{book.id}</div>
      </div>
    )
  }
}

BookDisplay.propTypes = {
  book: PropTypes.object.isRequired,
  bookMover: PropTypes.func.isRequired,
  bookshelfList: PropTypes.array.isRequired
}

export default BookDisplay;
