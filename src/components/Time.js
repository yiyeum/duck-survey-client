import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { TimePicker } from "material-ui-pickers";
import Stepper from './Stepper';

const Time = ({ history, fedTime, handleDateChange, handleRepeatChange, repeat, pushToNext, error, step, resetStep }) => {
  if(step < 1) {
    resetStep();
    history.push('/');
  }
  return (
    <div className="survey-wrapper">
      <Stepper step={1} />
      <p className="question">1. What time did you feed ducks?</p>
      <div className="picker">
        <TimePicker label="Time you fed" value={fedTime} onChange={handleDateChange} />
        <FormControlLabel
          control={
            <Checkbox
              checked={repeat}
              onChange={handleRepeatChange}
              value="repeat"
              color="primary"
            />
          }
          label="I feed everyday"
        />
      </div>
      <p className="error-message">{error}</p>
      <button type="button" className="survey-prev-button" onClick={() => history.push('/')}>Prev</button>
      <button type="button" className="survey-next-button" onClick={() => pushToNext('time')}>Next</button>
    </div>
  );
}

export default Time;