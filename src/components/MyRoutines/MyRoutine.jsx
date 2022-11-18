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

  return (
    <>
      <div className="routineBox">
        <div>
          <div className="routineInfo">
            <div>Routine Info</div>
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
            myRoutines={myRoutines}
            setMyRoutines={setMyRoutines}
          />
        </div>
        <div className="activityBox">
          <div className="activities">
            {myRoutine.activities.length ? (
              myRoutine.activities.map((activity) => {
                return (
                  <MyRoutineActivities
                    key={`activity-${activity.id}`}
                    activity={activity}
                    token={token}
                  />
                );
              })
            ) : (
              <div className="noActivity">This routine has no activity.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyRoutine;
