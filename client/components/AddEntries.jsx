import React from 'react';

const AddEntries = props => {
  const [ date, dateOnChange ] = useInput(new Date().toDateString());
  const [ duration, durationOnChange ] = useInput('');
  const [ distance, distanceOnChange ] = useInput('');
  const [ swolf, swolfOnChange ] = useInput('');

  return (
    // <div>
    //   <h3>Enter your data</h3>
    //   <h3>Date: </h3>
    //   <h3>Duration: </h3>
    //   <h3>Distance: </h3>
    //   <h3>swolf: </h3>
    // </div>
    <section className='enterData'>
      <article className='card createCard'>
        <h3>Enter your data</h3>
        <div className='createCardFields'>
          <label htmlFor='date'>Date: </label>
          <input name='date' placeholder={new Date().toDateString()}/>
        </div>
      </article>
    </section>
  );
};

export default AddEntries;