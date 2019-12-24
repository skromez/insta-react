import React, { Component } from 'react';
import Header from './Header.jsx';
import Profile from './Profile.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Profile />
      </div>
    );
  }
}

export default App;
