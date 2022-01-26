import React, { Component } from 'react';
import AddEntries from './components/AddEntries.jsx';
import MainContainer from './containers/MainContainer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <div>
        <AddEntries />
        <MainContainer />
      </div>
    );
  }
}

export default App;