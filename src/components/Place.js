import React from 'react';
import Stepper from './Stepper';
import TextField from '@material-ui/core/TextField';

const Place = () => {
  return (
    <div className="survey-wrapper">
      <Stepper step={2} />
      <p className="question">2. Where did you feed ducks?</p>
      <TextField
        label="Place Name"
        name="place"
        margin="normal"
      />
      <br />
      <p className="error-message">Error</p>
      <button type="button" className="survey-prev-button">Prev</button>
      <button type="button" className="survey-next-button">Next</button>
    </div>
  );
}

export default Place;