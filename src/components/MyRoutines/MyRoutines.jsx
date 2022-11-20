import React from "react";
import { MyRoutine } from "..";

const MyRoutines = ({
  token,
  allActivities,
  userRoutines,
  setUserRoutines,
}) => {
  return (
    <>
      <div>
        <div className="">
          {userRoutines.length ? (
            userRoutines.map((myRoutine) => {
              return (
                <MyRoutine
                  key={`myRoutine-${myRoutine.id}`}
                  token={token}
                  myRoutine={myRoutine}
                  userRoutines={userRoutines}
                  setUserRoutines={setUserRoutines}
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
