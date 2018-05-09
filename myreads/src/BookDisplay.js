import React, { Component } from 'react';
import BookMove from './BookMove.js';
import PropTypes from 'prop-types';

class BookDisplay extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    bookMover: PropTypes.func.isRequired,
    bookshelfList: PropTypes.array.isRequired
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.coverImageUrl})` }}></div>
          <BookMove
            book={this.props.book}
            bookMover={this.props.bookMover}
            bookshelf={this.props.bookshelf}
            bookshelfList={this.props.bookshelfList}
          />
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }
}

export default BookDisplay;
