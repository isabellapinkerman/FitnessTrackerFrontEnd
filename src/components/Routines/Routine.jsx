import React from "react";

const Routine = ({ routine }) => {
  return (
    <>
      <div className="routineBox">
        <div className="routineInfo">
          <div className="topRow">
          <div className="routineId">{`Routine ${routine.id}`}</div>
          <div className="creatorName">👤{routine.creatorName}</div>
          </div>
          <div className="routineName">{routine.name}</div>
          <div className="routineGoal">{`Goal: ${routine.goal}`}</div>
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
                  {" "}
                  <div className="activityId">{`Activity ${activity.id}`}</div>
                  <div>
                    {activity ? (
                      <div>
                        <div className="activityName">🎖️ {activity.name}</div>
                        <div>{`Description: ${activity.description}`}</div>
                        <div className="countDuration">
                        <div>{`Duration: ${activity.duration}`}</div>
                        <div>{`Count: ${activity.count}`}</div>
                        </div>
                      </div>
                    ) : (
                      <div className="noActivity">This routine has no activity</div>
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
