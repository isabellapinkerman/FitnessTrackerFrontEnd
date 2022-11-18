import React, { useState } from "react";
import {
  MyRoutineActivities,
  MyRoutineAttach,
  MyRoutineDelete,
  MyRoutineUpdate,
} from "..";

const MyRoutine = ({
  myRoutines,
  setMyRoutines,
  myRoutine,
  token,
  allActivities,
}) => {
  const [routineInfo, setRoutineInfo] = useState(myRoutine);
  const [activities, setActivities] = useState(myRoutine.activities);

  return (
    <>
      <div className="rbMyRoutineCard">
        <div id="rbRoutineTitle">Routine</div>
        <div className="rbMyRoutineSubCard">
          <div className="rbMyRoutineCardTitle">Routine Info</div>
          <div className="rbMyRoutine">
            <div>{`Created By: ${myRoutine.creatorName}`}</div>
            <div>{`Name: ${routineInfo.name}`}</div>
            <div>{`Goal: ${routineInfo.goal}`}</div>
            <div>
              Privacy Setting:{" "}
              {routineInfo.isPublic ? (
                <span>Public</span>
              ) : (
                <span>Private</span>
              )}
            </div>
            <MyRoutineDelete
              token={token}
              myRoutine={myRoutine}
              myRoutines={myRoutines}
              setMyRoutines={setMyRoutines}
            />
          </div>
          <MyRoutineUpdate
            token={token}
            routineInfo={routineInfo}
            myRoutine={myRoutine}
            setRoutineInfo={setRoutineInfo}
          />
          <MyRoutineAttach
            token={token}
            routineInfo={routineInfo}
            allActivities={allActivities}
            activities={activities}
            setActivities={setActivities}
          />{" "}
        </div>
        <div className="rbAllRoutineActivities">
          <div id="rbActivityTitle">Activities</div>
          <div id="rbActivitiesList">
            {activities.length ? (
              activities.map((activity) => {
                return (
                  <MyRoutineActivities
                    key={`activity-${activity.id}`}
                    token={token}
                    activity={activity}
                    activities={activities}
                    setActivities={setActivities}
                  />
                );
              })
            ) : (
              <div className="">This routine has no activity.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyRoutine;
