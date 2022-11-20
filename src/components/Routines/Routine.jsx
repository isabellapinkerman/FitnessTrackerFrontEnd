import React, { useState } from "react";
import { RoutinesByUser } from "../";

const Routine = ({ routine }) => {
  const [displayRoutines, setDisplayRoutines] = useState(false);
  function handleClickUser(event) {
    if (!displayRoutines) {
      event.preventDefault();
      setDisplayRoutines(true);
    } else {
      setDisplayRoutines(false);
    }
  }

  let creatorName = routine.creatorName;

  return (
    <>
      <div className="routineBox">
        <div className="routineInfo">
          <div className="topRow">
            <div className="routineId">{`Routine #${routine.id}`}</div>
            <button onClick={handleClickUser} className="creatorName">
              👤{routine.creatorName}
            </button>
          </div>
          <div className="routineName">{routine.name}</div>
          <div className="routineGoal">{`Goal: ${routine.goal}`}</div>
          <div>
            {localStorage.getItem("token") ? (
              <div>
                {displayRoutines ? (
                  <div className="activity">
                    <div>
                      <b>All Routines By: </b>
                      <span>
                        <b>{`${routine.creatorName}`}</b>
                      </span>
                    </div>
                    <RoutinesByUser creatorName={creatorName} />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="activities">
          {routine.activities ? (
            routine.activities.map((activity) => {
              return (
                <div
                  className="activity"
                  key={`activity-${activity.id}`}
                  routine={routine}
                >
                  <div className="activityId">{`Activity #${activity.id}`}</div>
                  <div>
                    {activity ? (
                      <div>
                        <div className="activityName">★ {activity.name}</div>
                        <div>{`Description: ${activity.description}`}</div>
                        <div className="countDuration">
                          <div className="duration">{`Duration: ${activity.duration}`}</div>
                          <div className="count">{`Count: ${activity.count}`}</div>
                        </div>
                      </div>
                    ) : (
                      <div className="noActivity">
                        This routine has no activity
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="noActivity">This routine has no activity.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Routine;
