import React from 'react';
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import Stepper from './Stepper';

const Place = ({ history, handleForm, place, pushToNext, error, step, resetStep }) => {
  if (step < 2) {
    resetStep();
    history.push('/');
  }
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
      <button
        type="button"
        className="survey-prev-button"
        onClick={() => history.push('/time')}
      >Prev</button>
      <button
        type="button"
        className="survey-next-button"
        onClick={() => pushToNext('place')}
      >Next</button>
    </div>
  );
}

Place.propTypes = {
  history: PropTypes.object,
  handleForm: PropTypes.func,
  place: PropTypes.string,
  pushToNext: PropTypes.func,
  step: PropTypes.number,
  resetStep: PropTypes.func
};

export default Place;