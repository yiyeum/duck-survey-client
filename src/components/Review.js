import React from 'react';


const Review = ({ history, place, numberOfDucks, food, foodType, foodAmount, fedTime, repeat, submitForm, error, step, resetStep }) => {
  const time = fedTime.split('T')[1].split('-')[0];
  if(step < 5) {
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
      <button type="button" className="survey-prev-button" onClick={() => history.push('/food')}>Prev</button>
      <button type="button" className="survey-next-button" onClick={submitForm}>Submit</button>
    </div>
  );
}

export default Review;