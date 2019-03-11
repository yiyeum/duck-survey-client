import React from 'react';
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import Stepper from './Stepper';

const Duck = ({ history, handleForm, numberOfDucks, pushToNext, error, step, resetStep }) => {
  if (step < 3) {
    resetStep();
    history.push('/');
  }
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
      <p className="error-message">{error}</p>
      <button
        type="button"
        className="survey-prev-button"
        onClick={() => history.push('/place')}
      >Prev</button>
      <button
        type="button"
        className="survey-next-button"
        onClick={() => pushToNext('duck')}
      >Next</button>
    </div>
  );
}

Duck.propTypes = {
  history: PropTypes.object,
  handleForm: PropTypes.func,
  pushToNext: PropTypes.func,
  step: PropTypes.number,
  resetStep: PropTypes.func
};

export default Duck;