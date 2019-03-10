import React from 'react';

const Review = () => {
  return (
    <div className="survey-wrapper">
      <p className="subtitle">Review</p>
      <div className="review-wrapper">
        <table className="review-table">
          <tbody>
            <tr>
              <th>Fed time</th>
              <td>time</td>
            </tr>
            <tr>
              <th>Place</th>
              <td>Place</td>
            </tr>
            <tr>
              <th>Number of ducks</th>
              <td>Number of ducks</td>
            </tr>
            <tr>
              <th>Food type</th>
              <td>Food type</td>
            </tr>
            <tr>
              <th>Food</th>
              <td>Food</td>
            </tr>
            <tr>
              <th>Food amount</th>
              <td>Food amount</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button type="button" className="survey-prev-button">Prev</button>
      <button type="button" className="survey-next-button">Submit</button>
    </div>
  );
}

export default Review;