import React from 'react';
import PropTypes from "prop-types";
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

const Food = ({ history, handleForm, food, foodType, foodAmount, pushToNext, error, step, resetStep }) => {
  if (step < 4) {
    resetStep();
    history.push('/');
  }
  return (
    <div className="survey-wrapper">
      <Stepper step={4} />
      <p className="question">4. What food did you give?</p>
      <TextField
        select
        className="food-input"
        label="Type of food"
        value={foodType}
        onChange={handleForm}
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
        value={food}
        onChange={handleForm}
        placeholder="ex) Lays chips"
      />
      <TextField
        label="Amount"
        name="foodAmount"
        value={foodAmount}
        onChange={handleForm}
        placeholder="ex) Half bag (50g)"
      />
      <br />
      <p className="error-message">{error}</p>
      <button
        type="button"
        className="survey-prev-button"
        onClick={() => history.push('/duck')}
      >Prev</button>
      <button
        type="button"
        className="survey-next-button"
        onClick={() => pushToNext('food')}
      >Next</button>
    </div>
  );
}

Food.propTypes = {
  history: PropTypes.object,
  handleForm: PropTypes.func,
  food: PropTypes.string,
  foodType: PropTypes.string,
  foodAmount: PropTypes.string,
  pushToNext: PropTypes.func,
  step: PropTypes.number,
  resetStep: PropTypes.func
};

export default Food;