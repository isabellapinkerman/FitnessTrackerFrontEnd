import React from "react";
import { Link } from "react-router-dom";
import Routine from "./Routine";

const Routines = ({ routines, token }) => {
  return (
    <>
      <div>
        {token ? (
          <Link to={"/createRoutine"}>
            <button>Create Routine</button>
          </Link>
        ) : (
          <></>
        )}
      </div>
      <h1>Routines</h1>
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
