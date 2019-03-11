import React from 'react';
import PropTypes from "prop-types";

/**
 * Stepper to be displayed on the top of each
 * question page
 * @param {*} step step state 
 */
const Stepper = ({ step }) => {
  return (
    <div className="stepper-wrapper">
      <div className={`stepper ${step === 1 ? 'stepper-active' : ''}`} />
      <div className={`stepper ${step === 2 ? 'stepper-active' : ''}`} />
      <div className={`stepper ${step === 3 ? 'stepper-active' : ''}`} />
      <div className={`stepper ${step === 4 ? 'stepper-active' : ''}`} />
    </div>
  );
}

Stepper.propTypes = {
  step: PropTypes.number
};

export default Stepper;