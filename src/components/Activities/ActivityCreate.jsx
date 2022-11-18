import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createActivity } from "../../api";

const ActivityCreate = ({ token, allActivities, setAllActivities }) => {
  const [message, setMessage] = useState(
    "Please enter Activity name and description"
  );

  async function handleSubmit(event) {
    event.preventDefault();
    const name = event.target[0].value;
    const description = event.target[1].value;
    const createdActivity = await createActivity(token, name, description);

    if (!createdActivity.error) {
      event.target[0].value = null;
      event.target[1].value = null;
      setMessage(`You've successfully created a new activity`);
      setAllActivities([...allActivities, createdActivity]);
    } else {
      setMessage(`Activity with activity name "${name}" already exists`);
    }
  }

  return (
    <>
    <div className="createBox">
      <div className="createBackground">
      <div className="createMessage">{message}</div>
      <form className="registerForm" onSubmit={handleSubmit}>
        <div className="createInput">
          <div id="divBox">
        <label htmlFor="name">Activity Name:</label>
        <input className="input" type="text" placeholder="Enter activity name" required></input>
        </div>
        <div id="divBox">
        <label htmlFor="description">Description:</label>
        <input className="input" type="text" placeholder="Enter description" required></input>
       </div>
       </div> 
       <button className="createButton" type="submit">
          Submit
        </button>
      </form>
      <div className="createBox2"></div>
      </div>
      <Link to="/activities">
        <button className="button">Back</button>
      </Link>
      </div>
    </>
  );
};

export default ActivityCreate;
