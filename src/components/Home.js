import React from 'react';

const Home = () => {
  return (
    <div className="home-wrapper">
            <h1>Welcome!</h1>
            <p className="main-text">By filling out this 3 minutes form,</p>
            <p className="main-text">you will help the scientists understand</p>
            <p className="main-text">how ducks are being fed in parks around the world.</p>

            <button type="button" className="home-ready-btn bounce animated infinite">I'm Ready</button>
        </div>
      );
  }
  
export default Home;