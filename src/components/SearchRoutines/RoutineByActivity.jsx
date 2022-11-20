import React from "react";

const RoutineByActivity = ({ routine }) => {
  return (
    <>
      <div>
        <b>Routine Name:</b> {routine.name}
      </div>
      <div>
        <b>Routine Goal:</b> {routine.goal}
      </div>
    </>
  );
};

export default RoutineByActivity;
