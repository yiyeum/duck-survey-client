import React from 'react';
import Stepper from './Stepper';
import TextField from '@material-ui/core/TextField';

const Place = ({ history, handleForm, place, pushToNext, error }) => {
  return (
    <div className="survey-wrapper">
      <Stepper step={2} />
      <p className="question">2. Where did you feed ducks?</p>
      <TextField
        label="Place Name"
        name="place"
        margin="normal"
        value={place}
        onChange={handleForm}
      />
      <br />
      <p className="error-message">{error}</p>
      <button type="button" className="survey-prev-button" onClick={() => history.push('/time')}>Prev</button>
      <button type="button" className="survey-next-button" onClick={() => pushToNext('place')}>Next</button>
    </div>
  );
}

export default Place;