import React, {useState} from "react";
import { updateRoutineActivity } from "../../api";

const MyRoutineActivitiesUpdate = ({ activity, token, setActivityInfo }) => {

  const[messageCountDuration, setMessageCountDuration] = useState("Change count or duration")
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
      setMessageCountDuration(`Count and duration set`)
      console.log(`Count set to ${count}. Duration set to ${duration}`);
    } else {
      setMessageCountDuration(`Count or duration limit exceeded.`)
      console.log(`Count or duration limit exceeded.`)
    }

    setActivityInfo(updatedRoutineActivity);
  }

  return (
    <>
    <div>{messageCountDuration}</div>
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
