
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
      if (target.title === book.title && target.author === book.author) {
        index = i;
      }
    }
    if (index >= 0) {
      this.books.pop(index)
    }
  }
}

class Library {
  constructor(bookshelfList, bookshelfTitleList) {
    this.bookshelves = [bookshelfList.length];
    for (var i=0; i<bookshelfList.length; i++) {
      this.bookshelves[i] = new Bookshelf(bookshelfList[i], bookshelfTitleList[i]);
    }
  }

  addBook(book, targetShelf) {
    this.bookshelves.forEach((shelf) => {
      if (shelf.key === targetShelf) {
        shelf.addBook(book)
      }
    });
  }

  moveBook(book, fromShelf, targetShelf) {
    this.bookshelves.forEach((shelf) => {
      if (shelf.key === fromShelf) {
        shelf.removeBook(book);
      } else if (shelf.key === targetShelf) {
        shelf.addBook(book);
      }
    });
  }
}

export {Book, Bookshelf, Library};
