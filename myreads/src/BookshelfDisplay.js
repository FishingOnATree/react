import React, { Component } from 'react';
import BookDisplay from './BookDisplay';
import PropTypes from 'prop-types';

class BookshelfDisplay extends Component {
  static propTypes = {
    bookshelf: PropTypes.object.isRequired,
    bookMover: PropTypes.func.isRequired,
    bookshelfList: PropTypes.array.isRequired
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.bookshelf.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.bookshelf.books.map((book) => (
              <li key={book.id} >
                <BookDisplay
                  book={book}
                  bookMover={this.props.bookMover}
                  bookshelf={this.props.bookshelf.key}
                  bookshelfList={this.props.bookshelfList}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookshelfDisplay;
