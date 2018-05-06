import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import BookshelfDisplay from './BookshelfDisplay';
import BookSearch from './BookSearch';
import {Book, Library} from './objects.js';
import { Link, Route } from 'react-router-dom';

const bookshelfList = [['reading', 'Currently Reading'],
                       ['want', 'Want to Read'],
                       ['read', 'Read']];

var myLib = new Library(bookshelfList);

function populateExamples() {
  var book1 = new Book("ID11", 'To Kill a Mockingbird', 'Harper Lee', 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api');
  var book2 = new Book("ID21", "Ender's Game", 'Orson Scott Card', 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api');
  var book3 = new Book("ID31", "1776", 'David', 'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api');
  var book4 = new Book("ID41", "the Hobbit", 'Tolkien', 'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api');
  var book5 = new Book("ID51", "Harry Potter and the Sorcerer's Stone1", 'J.K. Rolling', 'http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api');
  var book6 = new Book("ID61", "Harry Potter and the Sorcerer's Stone2", 'J.K. Rolling', 'http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api');
  myLib.addBook(book1, 'reading');
  myLib.addBook(book2, 'reading');
  myLib.addBook(book3, 'want');
  myLib.addBook(book4, 'want');
  myLib.addBook(book5, 'read');
  myLib.addBook(book6, 'read');
}

class BooksApp extends React.Component {
  state = {
    library: myLib
  }

  componentDidMount() {
    populateExamples();
    this.setState((currentState) => ({library: currentState.library}));
  }

  moveBook = (book, fromShelf, toShelf) => {
    myLib.moveBook(book, fromShelf, toShelf);
    this.setState((currentState) => ({library: currentState.library}));
  }

  addBook = (book, shelf) => {
    myLib.addBook(book, shelf);
  }

  render() {
    return (
      <div className="app">
        <Route path='/add' render = {({ history} ) => (
          <BookSearch addBook={this.addBook} />
        )} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {myLib.bookshelves
                  .map((bookshelf) => (
                    <BookshelfDisplay
                      key={bookshelf.key}
                      bookshelf={bookshelf}
                      bookshelfList={bookshelfList}
                      bookMover={this.moveBook}
                    />
                  ))
                }
              </div>
            </div>
            <div className="open-search">
              <Link to='/add'>Add a book</Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
