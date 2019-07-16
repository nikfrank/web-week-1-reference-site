import React from 'react';
import './App.css';

import Navbar from './Navbar';
import Leftbar from './Leftbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Leftbar />
      </div>
    );
  }
}

export default App;
