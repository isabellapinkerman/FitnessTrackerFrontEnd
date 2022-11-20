import React from "react";

const RoutineByUser = ({routine}) => {

  return (
    <>
      <div>Routine Name: {routine.name}</div>
      <div>Routine Goal: {routine.goal}</div>

    </>
  );
};

export default RoutineByUser;