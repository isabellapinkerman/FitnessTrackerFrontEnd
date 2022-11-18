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
      <div className="rbRoutineActivitiesCard">
        <div className="rbActivityCard">
          <div className="rbActivitySubCard">
            <div className="rbActivityInfo">
              <div>{`ID: ${activity.id}`}</div>
              <div>{`Name: ${activity.name}`}</div>
              <div>{`Description: ${activity.description}`}</div>
              <div>{`Count: ${activityInfo.count}`}</div>
              <div>{`Duration: ${activityInfo.duration}`}</div>
            </div>
            <MyRoutineActivitiesDelete
              token={token}
              activity={activity}
              activities={activities}
              setActivities={setActivities}
            />
          </div>
        </div>
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
