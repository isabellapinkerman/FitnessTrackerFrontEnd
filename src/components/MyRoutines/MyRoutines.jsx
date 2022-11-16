import React from "react";
import MyRoutine from "./MyRoutine";

const MyRoutines = ({ myRoutines, token }) => {
  return (
    <>
      <div>
        <div className="routines">
          {myRoutines.length ? (
            myRoutines.map((myRoutine) => {
              return (
                <MyRoutine
                  key={`myRoutine-${myRoutine.id}`}
                  myRoutine={myRoutine} token={token}
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
