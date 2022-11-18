import React, { useState } from "react";
import { MyRoutineActivitiesDelete, MyRoutineActivitiesUpdate } from "..";

const MyRoutineActivities = ({
  activity,
  token,
  activities,
  setActivities,
}) => {
  const [activityInfo, setActivityInfo] = useState(activity);

  return (
    <>
      <div className="activity">
        <div>Activity</div>
        <div>{`ID: ${activity.id}`}</div>
        <div>{`Name: ${activity.name}`}</div>
        <div>{`Description: ${activity.description}`}</div>
        <div>{`Count: ${activityInfo.count}`}</div>
        <div>{`Duration: ${activityInfo.duration}`}</div>
        <MyRoutineActivitiesDelete
          token={token}
          activity={activity}
          activities={activities}
          setActivities={setActivities}
        />
        <MyRoutineActivitiesUpdate
          token={token}
          activity={activity}
          activities={activities}
          setActivities={setActivities}
          setActivityInfo={setActivityInfo}
        />
      </div>
    </>
  );
};

export default MyRoutineActivities;
