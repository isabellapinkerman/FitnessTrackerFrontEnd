import React from "react";

const RoutineSingle = (props) => {
  const routine = props.routine;
  console.log(routine.activities);

  return (
    <>
      <div className="routine">
        <div>{routine.id}</div>
        <div>{routine.name}</div>
        <div>{routine.goal}</div>
        <div className="activities">
          {routine.activities.length ? (
            routine.activities.map((activity) => {
              return (
                <div className = "activity"
                  key={`activity-${activity.id}`}
                  routine={routine}
                >
                  <div>{`ID: ${activity.id}`}</div>
                  <div>{`Name: ${activity.name}`}</div>
                  <div>{`Description: ${activity.description}`}</div>
                  <div>{`Duration: ${activity.duration}`}</div>
                  <div>{`Count: ${activity.count}`}</div>
                </div>
              );
            })
          ) : (
            <div>Loading Routines</div>
          )}
        </div>
      </div>
    </>
  );
};

export default RoutineSingle;
