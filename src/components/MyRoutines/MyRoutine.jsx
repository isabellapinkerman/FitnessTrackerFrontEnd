import React, { useState } from "react";
import {
  MyRoutineActivities,
  MyRoutineAttach,
  MyRoutineDelete,
  MyRoutineEdit,
} from "..";

const MyRoutine = ({
  myRoutines,
  setMyRoutines,
  myRoutine,
  token,
  allActivities,
}) => {
  const [routine, setRoutine] = useState(myRoutine);

  return (
    <>
      <div className="routineBox">
        <div>
          <div className="routineInfo">
            <div>Routine Info</div>
            <div>{`Created By: ${routine.creatorName}`}</div>
            <div>{`Name: ${routine.name}`}</div>
            <div>{`Goal: ${routine.goal}`}</div>
            <div>
              Privacy Setting:{" "}
              {routine.isPublic ? <span>Public</span> : <span>Private</span>}
            </div>
            <MyRoutineDelete
              myRoutines={myRoutines}
              myRoutine={myRoutine}
              token={token}
              setMyRoutines={setMyRoutines}
            />
          </div>
          <MyRoutineEdit
            routine={routine}
            myRoutine={myRoutine}
            token={token}
          />

          <MyRoutineAttach allActivities={allActivities} routine={routine} token={token} setMyRoutines={setMyRoutines}/>
        </div>
        <div className="activityBox">
          <div className="activities">
            {routine.activities.length ? (
              routine.activities.map((activity) => {
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
