import React from "react";
import { Link } from "react-router-dom";
import MyRoutine from "./MyRoutine";

const MyRoutines = ({ allPublicRoutinesByUser }) => {
  return (
    <>
      {/* <CreateRoutine/> */}
      
      <Link to={"/createRoutine"}><button>Create Routine</button></Link>
      {/* <CreateActivity/> */}
      <div>
        <div className="routines">
          {allPublicRoutinesByUser.length ? (
            allPublicRoutinesByUser.map((myRoutine) => {
              return (
                <MyRoutine
                  key={`myRoutine-${myRoutine.id}`}
                  myRoutine={myRoutine}
                />
              );
            })
          ) : (
            <div>User has no routines</div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyRoutines;
