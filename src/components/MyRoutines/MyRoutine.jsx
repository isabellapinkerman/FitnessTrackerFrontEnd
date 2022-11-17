import React, { useState } from "react";
import {
  deleteRoutine,
  updateRoutine,
  attachActivityToRoutine,
} from "../../api";
import MyRoutineActivities from "./MyRoutineActivities";

const MyRoutine = ({
  myRoutines,
  setMyRoutines,
  myRoutine,
  token,
  allActivities,
}) => {
  const [routine, setRoutine] = useState(myRoutine);

  const [message, setMessage] = useState("Enter routine name and description.");

  async function handleChangeDeleteRoutine() {
    const deletedRoutine = await deleteRoutine(myRoutine.id, token);

    if (deletedRoutine.success) {
      myRoutines = myRoutines.filter(
        (routine) => routine.id !== deletedRoutine.id
      );
      setMyRoutines(myRoutines);
    }
  }

  async function handleSubmitEditRoutine(event) {
    event.preventDefault();
    const name = event.target[0].value;
    const goal = event.target[1].value;
    let isPublic = event.target[2].value;
    console.log(isPublic);
    if (isPublic === "Public") {
      isPublic = true;
    } else {
      isPublic = false;
    }
    const updatedRoutine = await updateRoutine(
      token,
      myRoutine.id,
      name,
      goal,
      isPublic
    );

    if (!updatedRoutine.error) {
      event.target[0].value = null;
      event.target[1].value = null;

      routine.name = updatedRoutine.name;
      routine.goal = updatedRoutine.goal;
      routine.isPublic = updatedRoutine.isPublic;

      setMessage(`You've successfully updated the routine`);
    } else {
      setMessage(`Routine with name "${name}" already exists`);
    }
  }

  const [attachActivityMessage, setAttachActivityMessage] = useState(
    "Select an activity then add a duration and count. "
  );

  async function handleClickAttachActivity(event) {
    event.preventDefault();
    let routineId = routine.id;
    let activityId = event.target[0].value;
    let count = event.target[1].value;
    let duration = event.target[2].value;
    const attachedActivity = await attachActivityToRoutine(
      token,
      routineId,
      activityId,
      count,
      duration
    );

    if (!attachedActivity.error) {
      setMyRoutines(myRoutines);
      setAttachActivityMessage("Activity attached to routine");
    } else {
      setAttachActivityMessage("Activity already exists in routine.");
    }
  }

  return (
    <>
      <div className="routineBox">
        <div className="routineInfo">
          <div>Routine Info</div>
          <div>{`Created By: ${routine.creatorName}`}</div>
          <div>{`Name: ${routine.name}`}</div>
          <div>{`Goal: ${routine.goal}`}</div>
          <div>
            Privacy Setting:{" "}
            {routine.isPublic ? <span>Public</span> : <span>Private</span>}
          </div>
          <button onClick={handleChangeDeleteRoutine}>Delete Routine</button>
        </div>
        <div className="editBox">
          <div className="routineInfo">
            <div>Edit Routine</div>
            <div>{message}</div>
            <form className="registerForm" onSubmit={handleSubmitEditRoutine}>
              <div>
                <label htmlFor="name">Name: </label>
                <input type="text" required></input>
              </div>
              <div>
                <label htmlFor="goal">Goal: </label>
                <input type="text" required></input>
              </div>
              <div>
                Privacy Setting:
                <select>
                  <option>Public</option>
                  <option>Private</option>
                </select>
              </div>
              <div>
                <button className="button" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="routineInfo">
            <div>Attach Activity to Routine</div>
            <div>{attachActivityMessage}</div>
            <form onSubmit={handleClickAttachActivity}>
              <select>
                {allActivities.map((activity) => {
                  return (
                    <option key={`activity-${activity.id}`} value={activity.id}>
                      {activity.name}
                    </option>
                  );
                })}
              </select>
              <div>
                <label htmlFor="count">Count: </label>
                <input type="number" min="0" required></input>
              </div>
              <div>
                <label htmlFor="duration">Duration: </label>
                <input type="number" min="0" required></input>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className="activityBox">
          <div className="activities">
            {routine.activities.length ? (
              routine.activities.map((activity) => {
                return (
                  <MyRoutineActivities
                    key={`activity-${activity.id}`}
                    activity={activity}
                    token={token}
                  />
                );
              })
            ) : (
              <div className="noActivity">This routine has no activity.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyRoutine;
