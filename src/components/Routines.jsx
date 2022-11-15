import React from "react";
import RoutineSingle from "./RoutineSingle";

const Routines = ({ allRoutines }) => {
  return (
    <>
      <div>{`This is your Routines component`}</div>
      <div><div className="routines">
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
          <div className="noActivity">Loading Routines</div>
        )}</div>
      </div>
    </>
  );
};

export default Routines;
