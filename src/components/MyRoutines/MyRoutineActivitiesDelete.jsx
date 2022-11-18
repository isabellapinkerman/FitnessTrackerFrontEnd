import React from "react";
import { deleteRoutineActivity } from "../../api";

const MyRoutineActivitiesDelete = ({activity, token}) => {
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
    }
  }

  return (
    <>
      <button onClick={handleClickDeleteActivity}>Delete Activity</button>{" "}
    </>
  );
};

export default MyRoutineActivitiesDelete;
