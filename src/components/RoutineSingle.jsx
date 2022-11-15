import React from "react";

const RoutineSingle = (props) => {
  const routine = props.routine;

  return (
    <>
      <div className="routineBox">
        <div className="routineInfo">
        <div>Routine Info</div>
          <div>{routine.id}</div>
          <div>{routine.name}</div>
          <div>{routine.goal}</div>
        </div>

        <div className="activities">
          {routine.activities.length ? (
            routine.activities.map((activity) => {
              return (
                <div
                  className="activity"
                  key={`activity-${activity.id}`}
                  routine={routine}
                > <div>Activity</div>
                  <div>{`ID: ${activity.id}`}</div>
                  <div>{`Name: ${activity.name}`}</div>
                  <div>{`Description: ${activity.description}`}</div>
                  <div>{`Duration: ${activity.duration}`}</div>
                  <div>{`Count: ${activity.count}`}</div>
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

export default RoutineSingle;
