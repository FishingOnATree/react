import React, { Component } from 'react';

const contacts = [
 {
   "id": "karen",
   "name": "Karen Isgrigg",
   "handle": "karen_isgrigg",
   "avatarURL": "http://localhost:5001/karen.jpg"
 },
 {
   "id": "richard",
   "name": "Richard Kalehoff",
   "handle": "richardkalehoff",
   "avatarURL": "http://localhost:5001/richard.jpg"
 },
 {
   "id": "tyler",
   "name": "Tyler McGinnis",
   "handle": "tylermcginnis",
   "avatarURL": "http://localhost:5001/tyler.jpg"
 }
];

class User extends React.Component{
  render() {
    return (
      <div>
        <p>Name: {this.props.username}</p>
        <p>A friend? {this.props.friend} </p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <User username="Abc" friend={true} ></User>
      </div>
    );
  }
}

export default App;
