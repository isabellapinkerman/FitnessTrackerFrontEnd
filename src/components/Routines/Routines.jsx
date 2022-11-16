import React from "react";
import Routine from "./Routine";

const Routines = ({ routines }) => {

  return (
    <>
      <div className="routines">
        {routines.length ? (
          routines.map((routine) => {
            return <Routine key={`routine-${routine.id}`} routine={routine} />;
          })
        ) : (
          <div>No Routines Found</div>
        )}
      </div>
    </>
  );
};

export default Routines;
