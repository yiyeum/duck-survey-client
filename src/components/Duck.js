import React from 'react';
import TextField from '@material-ui/core/TextField';
import Stepper from './Stepper';

const Duck = ({ history, handleForm, numberOfDucks, pushToNext }) => {
  return (
    <div className="survey-wrapper">
      <Stepper step={3} />
      <p className="question">3. How many ducks did you feed?</p>
      <TextField
        label="Number of ducks"
        name="numberOfDucks"
        value={numberOfDucks}
        onChange={handleForm}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
      <br />
      <p className="error-message">Error</p>
      <button type="button" className="survey-prev-button" onClick={() => history.push('/place')}>Prev</button>
      <button type="button" className="survey-next-button" onClick={() => pushToNext('duck')}>Next</button>
    </div>
  );
}

export default Duck;