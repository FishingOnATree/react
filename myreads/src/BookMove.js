import React, { Component } from 'react';

class BookMove extends Component{
  render() {
    return (
      <div className="book-shelf-changer">
        <select>
          <option value="none" disabled>Move to...</option>
          {this.props.bookshelfList.map((shelf) => (
            <option value={shelf[0]}>{shelf[1]}</option>
          ))
          }
        </select>
      </div>
    )
  }
}

export default BookMove;
