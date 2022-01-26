import React from 'react';
import DataCard from './DataCard.jsx';

const DataCardDisplay = props => {
  const cards = [];
  for (let i = 0; i < 3; i ++) {
    cards.push(
      <DataCard />
    );
  }
  return (
    <div className="displayBox">
      <h4>Previous Workout</h4>
      {cards}
    </div>
  );
};

export default DataCardsDisplay;