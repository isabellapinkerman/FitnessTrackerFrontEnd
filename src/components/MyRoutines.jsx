import React from "react";
import MyRoutine from "./MyRoutine";

const MyRoutines = ({ allPublicRoutinesByUser }) => {
  return (
    <>
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
