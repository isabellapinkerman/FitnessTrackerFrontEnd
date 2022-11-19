import React from "react";

const RoutineByActivity = ({publicRoutine}) => {

  console.log(publicRoutine, "this is public routine")
  return (
    <>
      <div>Routine Name: {publicRoutine.name}</div>
      <div>Routine Name: {publicRoutine.name}</div>
    </>
  );
};

export default RoutineByActivity;