import React from 'react';
import { TimePicker } from "material-ui-pickers";
import Stepper from './Stepper';

const Time = ({ history, fedTime, handleDateChange }) => {
  return (
    <div className="survey-wrapper">
      <Stepper step={1} />
      <p className="question">1. What time did you feed ducks?</p>
      <div className="picker">
        <TimePicker label="Time you fed" value={fedTime} onChange={handleDateChange} />
      </div>
      <p className="error-message">error message</p>
      <button type="button" className="survey-prev-button" onClick={() => history.push('/')}>Prev</button>
      <button type="button" className="survey-next-button">Next</button>
    </div>
  );
}

export default Time;