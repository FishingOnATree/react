import React, { Component } from 'react';
import BookDisplay from './BookDisplay'

class BookshelfDisplay extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.bookshelf.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.bookshelf.books.map((book) => (
              <li key={book.title}>
                <BookDisplay book={book}
                             bookshelf={this.props.shelf}
                             bookshelfList={this.props.bookshelfList} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookshelfDisplay;
