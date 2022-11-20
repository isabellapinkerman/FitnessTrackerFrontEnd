import React, { useState } from "react";
import { updateActivity } from "../../api";

const ActivityUpdate = ({ token, activity, setActivityEdit }) => {
  const [message, setMessage] = useState(
    "Please enter activity name and description"
  );

  async function handleSubmitEdit(event) {
    event.preventDefault();
    const name = event.target[0].value;
    const description = event.target[1].value;
    const activityId = activity.id;

    const updatedActivity = await updateActivity(
      token,
      activityId,
      name,
      description
    );

    if (!updatedActivity.error) {
      event.target[0].value = null;
      event.target[1].value = null;
      setActivityEdit(updatedActivity);

      setMessage(`You've successfully updated the activity`);
    } else {
      setMessage(`Activity with name "${name}" already exists`);
    }
  }
  return (
    <>
      <div className="activityEditBox">
        <div className="activityId">✒️ Edit Activity Here</div>
        <div>{message}</div>
        <form className="registerForm" onSubmit={handleSubmitEdit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" required></input>
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <input type="text" required></input>
          </div>
          <div>
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ActivityUpdate;
