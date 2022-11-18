import React from "react";

const Home = () => {
  return (
    <div className="homePage">
      <div className="homeHeader">
        Organize and schedule your Fitness Journey with Fitness Tracker!
      </div>
      <div>
      <div className="homeBody">
        <div className="benefits">
         <div className="Benefits">Benefits</div> 
         <ul>
          <li>Create Workout Routines for you and your friends</li>
          <li>Track and share your Fitness Journey</li>
          <li>An organized schedule to help Motivate</li>
          <li>Be inspired by other's routines and activities</li>
          <li>Look back on old routines and your progress</li>
          <li>Add activities created by others to your Routines</li>
        </ul>
        </div>
        <div className="highFiveImg">
          <img src="https://t3.ftcdn.net/jpg/03/08/72/80/240_F_308728099_AdWDcjBTazzfGCAvb54HuWmaTmbd9Xi9.jpg"></img>
        </div>
      </div>
      <div className="homeDiv">
        <div id="homeWords">Let us help you reach your Fitness Goals!</div>
      </div>
      <div id="homeImgDiv">
        <div className="encourage">Encourage yourself and your peers!</div>
        <div className="success">Your Success journey begins here!</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
