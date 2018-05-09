# MyReads Project

This is source code for the MyRead project for Udacity's React Fundamentals course.

## To Run the project

To get started right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## File contents
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   ├── index.html # DO NOT MODIFY
│   └── noimage.png # the default image when a book thumbnail is not available.
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of MyRead app.
    ├── App.test.js # Used for testing.
    ├── BookDisplay.js # The react component to display a book
    ├── BookMove.js # The react component to display and handle the dropdown to move a book to different shelf.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── BookSearch.js # The react component to handle book search page.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    └── objects.js # The base objects representing a book, a shelf and the library.
```

## Design Decision

To simplify the user workflow, I decided to hide books already on the shelf on the search page, and force end users to always select a shelf to add a book.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is cloned from the starter code from Udacity.
