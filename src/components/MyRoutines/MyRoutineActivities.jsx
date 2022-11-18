import React, { useState } from "react";
import { MyRoutineActivitiesDelete, MyRoutineActivitiesUpdate } from "..";

const MyRoutineActivities = ({ activity, token }) => {
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
        <MyRoutineActivitiesDelete token={token} activity={activity} />
        <MyRoutineActivitiesUpdate
          token={token}
          activity={activity}
          setActivityInfo={setActivityInfo}
        />
      </div>
    </>
  );
};

export default MyRoutineActivities;
