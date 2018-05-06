
class Book{
  constructor(id, title, authors, coverImageUrl) {
    this.is = id;
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
    // TODO: fix remove book
    // this.books = this.books.filter((book) => {
    //   console.log(target.id + " vs " + book.id)
    //   return target.id != book.id
    // })
    var index = -1;
    for (var i=0; i<this.books.length; i++) {
      var book = this.books[i];
      if (target.id === book.id) {
        index = i;
      }
    }
    if (index >= 0) {
      this.books.pop(index)
    }
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
    console.log("move book from: " + fromShelf + " to: " + targetShelf);
    this.bookshelves.forEach((shelf) => {
      if (shelf.key === fromShelf) {
        console.log("removeBook");
        shelf.removeBook(book);
      } else if (shelf.key === targetShelf) {
        shelf.addBook(book);
      }
    });
  }
}

export {Book, Bookshelf, Library};
