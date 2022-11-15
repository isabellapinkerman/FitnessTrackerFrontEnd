import React from "react";
import Routine from "./Routine";

const Routines = ({ allRoutines }) => {
  return (
    <>
      <div>{`This is your Routines component`}</div>
      <div><div className="routines">
        {allRoutines.length ? (
          allRoutines.map((routine) => {
            return (
              <Routine
                key={`routine-${routine.id}`}
                routine={ routine }
              />
            );
          })
        ) : (
          <div>Loading Routines</div>
        )}</div>
      </div>
    </>
  );
};

export default Routines;
