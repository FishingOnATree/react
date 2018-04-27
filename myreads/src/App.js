import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookshelfDisplay from './BookshelfDisplay'

class Book{
  constructor(title, authors, coverImageUrl) {
    this.title = title;
    this.authors = authors;
    this.coverImageUrl = coverImageUrl;
  }
}

class Bookshelf {
  constructor(key, title) {
    this.key = key;
    this.title = title;
    this.books = []
  }

  addBook(book) {
    //TODO: check duplicates
    this.books.push(book)
  }

  removeBook(target) {
    var index = -1;
    for (var i=0; i<this.books.length; i++) {
      var book = this.books[i];
      if (target.title == book.title && target.author  == book.author) {
        index = i;
      }
    }
    if (index >= 0) {
      this.books.pop(index)
    }
  }
}

class Library {
  constructor() {
    this.bookshelves = []
    this.bookshelves.push(new Bookshelf('reading', 'Currently Reading'))
    this.bookshelves.push(new Bookshelf('want', 'Want to Read'))
    this.bookshelves.push(new Bookshelf('read', 'Read'))
    this.bookshelves.push(new Bookshelf('none', 'Not categorized'))
  }
}
const book1 = new Book('To Kill a Mockingbird', 'Harper Lee', 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api');
const book2 = new Book("Ender's Game", 'Orson Scott Card', 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api');
const book3 = new Book("1776", 'David', 'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api');
const book4 = new Book("the Hobbit", 'Tolkien', 'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api');
const book5 = new Book("Harry Potter and the Sorcerer's Stone1", 'J.K. Rolling', 'http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api');
const book6 = new Book("Harry Potter and the Sorcerer's Stone2", 'J.K. Rolling', 'http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api');
//const bookshelf1 = [book1, book2];
//const bookshelf2 = [book3, book4];
//const bookshelf3 = [book5, book6];
const bookshelf1 = new Bookshelf('reading', 'Currently Reading');
bookshelf1.addBook(book1);
bookshelf1.addBook(book2);
const bookshelf2 = new Bookshelf('want', 'Want to Read');
bookshelf2.addBook(book3);
bookshelf2.addBook(book4);
const bookshelf3 = new Bookshelf('read', 'Read');
bookshelf3.addBook(book5);
bookshelf3.addBook(book6);

console.log(book1.authors);

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookshelfDisplay bookshelf={bookshelf1} />
                <BookshelfDisplay bookshelf={bookshelf2} />
                <BookshelfDisplay bookshelf={bookshelf3} />
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
