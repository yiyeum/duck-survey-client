import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Stepper from './Stepper';

const foodtypes = [
  {
    value: 'Snack',
    label: 'Snack',
  },
  {
    value: 'Fruit',
    label: 'Fruit',
  },
  {
    value: 'Bread',
    label: 'Bread',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];

const Food = () => {
  return (
    <div className="survey-wrapper">
      <Stepper step={4} />
      <p className="question">4. What food did you give?</p>
      <TextField
        select
        className="food-input"
        label="Type of food"
        name="foodType"
        helperText="Please select the type of food"
      >
        {foodtypes.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Food"
        className="food-input"
        name="food"
        placeholder="ex) Lays chips"
      />
      <TextField
        label="Amount"
        name="foodAmount"
        placeholder="ex) Half bag (50g)"
      />
      <br />
      <p className="error-message">Error</p>
      <button type="button" className="survey-prev-button">Prev</button>
      <button type="button" className="survey-next-button">Next</button>
    </div>
  );
}

export default Food;