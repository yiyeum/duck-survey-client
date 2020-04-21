import React from 'react';
import PropTypes from "prop-types";

const Review = ({ history, place, numberOfDucks, food, foodType, foodAmount, fedTime, repeat, submitForm, error, step, resetStep }) => {
  const time = fedTime.toString().split('T')[1].split('-')[0];
  if (step < 5) {
    resetStep();
    history.push('/');
  }
  return (
    <div className="survey-wrapper">
      <p className="subtitle">Review</p>
      <div className="review-wrapper">
        <table className="review-table">
          <tbody>
            <tr>
              <th>Fed time</th>
              <td>{time}</td>
            </tr>
            <tr>
              <th>Feed Everyday</th>
              <td>{repeat ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <th>Place</th>
              <td>{place}</td>
            </tr>
            <tr>
              <th>Number of ducks</th>
              <td>{numberOfDucks}</td>
            </tr>
            <tr>
              <th>Food type</th>
              <td>{foodType}</td>
            </tr>
            <tr>
              <th>Food</th>
              <td>{food}</td>
            </tr>
            <tr>
              <th>Food amount</th>
              <td>{foodAmount}</td>
            </tr>
          </tbody>
        </table>
        <p className="error-message" style={{ textAlign: 'center' }}>{error}</p>
      </div>
      <button
        type="button"
        className="survey-prev-button"
        onClick={() => history.push('/food')}
      >Prev</button>
      <button
        type="button"
        className="survey-next-button"
        onClick={submitForm}
      >Submit</button>
    </div>
  );
}

Review.propTypes = {
  history: PropTypes.object,
  place: PropTypes.string,
  food: PropTypes.string,
  foodType: PropTypes.string,
  foodAmount: PropTypes.string,
  pushToNext: PropTypes.func,
  fedTime: PropTypes.string,
  repeat: PropTypes.bool,
  submitForm: PropTypes.func,
  step: PropTypes.number,
  resetStep: PropTypes.func
};


export default Review;