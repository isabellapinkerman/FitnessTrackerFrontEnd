import React from "react";
import { updateRoutineActivity } from "../../api";

const MyRoutineActivitiesUpdate = ({ activity, token, setActivityInfo }) => {
  async function handleSubmitEditRoutineActivity(event) {
    event.preventDefault();
    let count = event.target[0].value;
    let duration = event.target[1].value;
    let routineActivityId = activity.routineActivityId;

    if (count == "") {
      count = activity.count;
    }
    if (duration === "") {
      duration = activity.duration;
    }

    let updatedRoutineActivity = await updateRoutineActivity(
      token,
      count,
      duration,
      routineActivityId
    );

    if (!updatedRoutineActivity.error) {
      console.log(`Count set to ${count}. Duration set to ${duration}`);
    }

    setActivityInfo(updatedRoutineActivity);

    console.log(updatedRoutineActivity);
  }

  return (
    <>
      <form onSubmit={handleSubmitEditRoutineActivity}>
        <div>
          <label htmlFor="count">Count: </label>
          <input type="number" min="0"></input>
        </div>
        <div>
          <label htmlFor="duration">Duration: </label>
          <input type="number" min="0"></input>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default MyRoutineActivitiesUpdate;
