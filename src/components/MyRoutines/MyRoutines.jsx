import React from "react";
import MyRoutine from "./MyRoutine";

const MyRoutines = ({ myRoutines, token, allPublicRoutinesByUser, setAllPublicRoutinesByUser }) => {
  return (
    <>
      <div>
        <div className="routines">
          {myRoutines.length ? (
            myRoutines.map((myRoutine) => {
              return (
                <MyRoutine
                  key={`myRoutine-${myRoutine.id}`}
                  myRoutine={myRoutine} token={token} allPublicRoutinesByUser={allPublicRoutinesByUser} setAllPublicRoutinesByUser={setAllPublicRoutinesByUser}
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
