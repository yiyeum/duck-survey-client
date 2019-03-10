import React from 'react';

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

export default Stepper;