import React, { Component } from 'react';
import BookDisplay from './BookDisplay'

class Bookshelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.sectionName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <li>
                <BookDisplay book={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf;
