import React from "react";
import { RoutineByActivity } from "..";

const RoutinesByActivity = ({ publicRoutines }) => {

  console.log(publicRoutines, "this is public routines")
  return (
    <>
      <div>
        {publicRoutines ? (
          publicRoutines.map((publicRoutine) => {
            return (
              <RoutineByActivity
                key={`publicRoutines-${publicRoutine.id}`}
                publicRoutine={publicRoutine}
              />
            );
          })
        ) : (
          <div>There are no public routines with this activity.</div>
        )}
      </div>
    </>
  );
};

export default RoutinesByActivity;
