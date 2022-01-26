import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddEntries from '../components/AddEntries.jsx';
import DataCardsDisplay from '../components/DataCardsDisplay.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="container">
        <h1 id="header">Your workout data</h1>
        <AddEntries />
        <DataCardsDisplay />
      </div>
    );
  }
};

export default MainContainer;