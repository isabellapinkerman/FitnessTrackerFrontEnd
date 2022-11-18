import React, { useState } from "react";
import { attachActivityToRoutine } from "../../api";

const MyRoutineAttach = ({ allActivities, routine, token, setMyRoutines }) => {
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
    </>
  );
};

export default MyRoutineAttach;
