import React from "react";
import { MyRoutine } from "..";

const MyRoutines = ({ myRoutines, token, setMyRoutines, allActivities }) => {
  return (
    <>
      <div>
        <div className="routines">
          {myRoutines.length ? (
            myRoutines.map((myRoutine) => {
              return (
                <MyRoutine
                  key={`myRoutine-${myRoutine.id}`}
                  myRoutine={myRoutine}
                  token={token}
                  myRoutines={myRoutines}
                  setMyRoutines={setMyRoutines}
                  allActivities={allActivities}
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
