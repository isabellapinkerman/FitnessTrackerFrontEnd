import React from "react";

const RoutineSingle = (props) => {
  const routine = props.routine;
  console.log(routine);

  return (
    <>
      <div className="routine">
        <div>{routine.id}</div>
        <div>{routine.name}</div>
        <div>{routine.goal}</div>
        <div>{routine.activities.length ? (
          routine.activities.map((activity) => {
            return (
              <div
                key={`activity-${`THIS IS EMPTY RIGHT NOW`}`}
                routine={ routine }
              >{`${activity}`}</div>
            );
          })
        ) : (
          <div>Loading Routines</div>
        )}</div>
      </div>
    </>
  );
};

export default RoutineSingle;
