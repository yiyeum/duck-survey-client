import React from 'react';
import PropTypes from "prop-types";

const Complete = ({ history }) => {
  return (
    <div className="home-wrapper">
      <h1>Thank you!</h1>
      <p className="main-text">Thanks for your time to complete this survey.</p>
      <button 
        type="button"
        className="result-btn" 
        onClick={() => history.push('/result')}
      >See the result</button>
    </div>
  );
}

Complete.propTypes = {
  history: PropTypes.object
};

export default Complete;