import React from "react";

const RoutineByUser = ({ routine }) => {
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

export default RoutineByUser;
