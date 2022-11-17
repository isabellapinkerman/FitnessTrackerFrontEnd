import React from "react";
import { deleteRoutineActivity, updateRoutineActivity } from "../../api";

const MyRoutineActivities = ({ activity, token }) => {

  async function handleClickDeleteActivity(event) {
    event.preventDefault()
    let routineActivityId = activity.routineActivityId;
    let deletedRoutineActivity = await deleteRoutineActivity(
      routineActivityId,
      token
    );
    if (deletedRoutineActivity) {
      console.log(
        `Activity with ID: ${activity.id} was removed from routine with ID: ${activity.routineId}`
      );
    }
  }

  async function handleSubmitEditRoutineActivity(event) {
    event.preventDefault()
    let count = event.target[0].value;
    let duration = event.target[1].value;
    let routineActivityId = activity.routineActivityId;

    let updatedRoutineActivity = await updateRoutineActivity(token, count, duration, routineActivityId);

    console.log(updatedRoutineActivity);
  }

  return (
    <>
      <div className="activity">
        <div>Activity</div>
        <div>{`ID: ${activity.id}`}</div>
        <div>{`Name: ${activity.name}`}</div>
        <div>{`Description: ${activity.description}`}</div>
        <div>{`Count: ${activity.count}`}</div>
        <div>{`Duration: ${activity.duration}`}</div>
        <button onClick={handleClickDeleteActivity}>Delete Activity</button>

        <form onSubmit={handleSubmitEditRoutineActivity}>
          <div>
            <label htmlFor="count">Count: </label>
            <input type="number" min="0" required></input>
          </div>
          <div>
            <label htmlFor="duration">Duration: </label>
            <input type="number" min="0" required></input>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MyRoutineActivities;
