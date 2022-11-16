import React from "react";
import MyRoutine from "./MyRoutine";
import { Link } from "react-router-dom";

const MyRoutines = ({ allPublicRoutinesByUser }) => {
  return (
    <>
      {/* <CreateRoutine/> */}
      <Link to={"/createActivity"}><button>Create Activity</button></Link>
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
