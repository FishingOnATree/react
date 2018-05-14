import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookMove extends Component{
  static propTypes = {
    book: PropTypes.object.isRequired,
    bookMover: PropTypes.func.isRequired,
    bookshelf: PropTypes.string.isRequired,
    bookshelfList: PropTypes.array.isRequired
  }

  render() {
    const srcShelf = this.props.bookshelf;
    const {book} = this.props;
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
