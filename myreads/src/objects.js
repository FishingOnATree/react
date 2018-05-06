
class Book{
  constructor(id, title, authors, coverImageUrl) {
    this.id = id;
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
    this.books.push(book)
  }

  removeBook(target) {
    this.books = this.books.filter((book) => {
      return target.id != book.id
    });
  }
}

class Library {
  constructor(bookshelfList) {
    this.bookshelves = new Array(bookshelfList.length);
    for (var i=0; i<bookshelfList.length; i++) {
      this.bookshelves[i] = new Bookshelf(bookshelfList[i][0], bookshelfList[i][1]);
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
