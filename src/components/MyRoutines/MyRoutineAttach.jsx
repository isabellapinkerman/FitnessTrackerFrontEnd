import React, { useState } from "react";
import { attachActivityToRoutine } from "../../api";

const MyRoutineAttach = ({
  allActivities,
  routineInfo,
  token,
  activities,
  setActivities,
}) => {
  const [attachActivityMessage, setAttachActivityMessage] = useState(
    "Select an activity then add a duration and count. "
  );

  async function handleClickAttachActivity(event) {
    event.preventDefault();
    let routineId = routineInfo.id;
    let activityId = event.target[0].value;
    let count = event.target[1].value;
    let duration = event.target[2].value;

    if (count === "") {
      count = 0;
    }
    if (duration === "") {
      duration = 0;
    }

    const attachedActivity = await attachActivityToRoutine(
      token,
      routineId,
      activityId,
      count,
      duration
    );

    if (!attachedActivity.error) {
      event.target[1].value = null;
      event.target[2].value = null;
      if (count === 0 || duration === 0) {
        setAttachActivityMessage(
          `Activity set but count is set to ${count} while duration is set to ${duration}.`
        );
      } else {
        setAttachActivityMessage("Activity attached to routine");
      }
      console.log(
        `Activity with ID ${activityId} is attached to routine with ID ${routineId}`
      );

      let activity = allActivities.filter(
        (activity) => activity.id == activityId
      );

      console.log(activity);
      setActivities([...activities, activity]);
    } else {
      setAttachActivityMessage("Activity already exists in routine.");
    }
  }

  return (
    <>
      <div className="rbMyRoutineCardTitle">Attach Activity to Routine</div>
      <div className="rbMyRoutineAttach">
        <div className="rbRoutineMessage">{attachActivityMessage}</div>
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
            <input type="number" min="0"></input>
          </div>
          <div>
            <label htmlFor="duration">Duration: </label>
            <input type="number" min="0"></input>
          </div>
          <button className="rbSubmitButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default MyRoutineAttach;
