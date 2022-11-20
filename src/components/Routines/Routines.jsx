import React from "react";
import { Link } from "react-router-dom";
import { Routine } from "..";

const Routines = ({ routines }) => {
  return (
    <>
      <div className="createButton">
        {localStorage.getItem("token") ? (
          <Link to={"/createRoutine"}>
            <button className="newButton">Create Routine</button>
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div className="routines">
        {routines.length ? (
          routines.map((routine) => {
            return (
              <Routine
                key={`routine-${routine.id}`}
                routine={routine}
              />
            );
          })
        ) : (
          <div>No Routines Found</div>
        )}
      </div>
    </>
  );
};

export default Routines;
