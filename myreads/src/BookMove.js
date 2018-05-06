import React, { Component } from 'react';

class BookMove extends Component{
  render() {
    const srcShelf = this.props.bookshelf;
    const book = this.props.book;
    return (
      <div className="book-shelf-changer">
        <select value={srcShelf} onChange={(event) => {
          var targetShelf = event.target.value;
          this.props.bookMover(book, srcShelf, targetShelf);
        }}>
          <option value="none" disabled>Move to...</option>
          {this.props.bookshelfList.map((shelf) => {
            return <option key={shelf[0]} value={shelf[0]}>{shelf[1]}</option>
          })
          }
        </select>
      </div>
    )
  }
}

export default BookMove;
