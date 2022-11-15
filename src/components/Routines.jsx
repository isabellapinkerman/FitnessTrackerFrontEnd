import React from "react";
import RoutineSingle from "./RoutineSingle";

const Routines = ({ allRoutines }) => {
  return (
    <>
      <div>{`This is your Routines component`}</div>
      <div>
        {allRoutines.length ? (
          allRoutines.map((routine) => {
            return (
              <RoutineSingle
                key={`routine-${routine.id}`}
                routine={ routine }
              />
            );
          })
        ) : (
          <div>Loading Routines</div>
        )}
      </div>
    </>
  );
};

export default Routines;
