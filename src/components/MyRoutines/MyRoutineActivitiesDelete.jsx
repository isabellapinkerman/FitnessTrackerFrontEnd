import React from "react";
import { deleteRoutineActivity } from "../../api";

const MyRoutineActivitiesDelete = ({
  token,
  activity,
  activities,
  setActivities
}) => {
  async function handleClickDeleteActivity(event) {
    event.preventDefault();
    let routineActivityId = activity.routineActivityId;

    let deletedRoutineActivity = await deleteRoutineActivity(
      routineActivityId,
      token
    );

    if (deletedRoutineActivity) {
      console.log(
        `Activity with ID: ${activity.id} was removed from routine with ID: ${activity.routineId}`
      );
      activities = activities.filter(
        (activity) => activity.routineActivityId !== deletedRoutineActivity.id
      );
      setActivities(activities)
    }
  }

  return (
    <>
      <button onClick={handleClickDeleteActivity}>Delete Activity</button>{" "}
    </>
  );
};

export default MyRoutineActivitiesDelete;
