import React, { useState } from "react";
import { Link } from "react-router-dom";
import { updateActivity } from "../../api";
import RoutinesByActivity from "./RoutinesByActivity";

const Activity = ({ activity, token }) => {
  const [activityEdit, setActivityEdit] = useState(activity);
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

      activityEdit.name = updatedActivity.name;
      activityEdit.description = updatedActivity.description;
      setActivityEdit(activityEdit);

      setMessage(`You've successfully updated the activity`);
    } else {
      setMessage(`Activity with name "${name}" already exists`);
    }
  }

  return (
    <>
      <div className="activityBox">
        <div className="activityInfo">          <div className="activityId">{`Activity ${activity.id}`}</div>
          <div>
            <button>🎖️ {activityEdit.name}</button>
          </div>
          <div className="activityDescription">{`Description: ${activityEdit.description}`}</div>
          <RoutinesByActivity activityId={activity.id} token={token}/>
        </div>
        {localStorage.getItem("token") ? (
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
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Activity;
