import React from "react";

const MyRoutine = ({ myRoutine }) => {

  return (
    <>
      <div className="routineBox">
        <div className="routineInfo">
          <div>Routine Info</div>
          <div>{`Created By: ${myRoutine.creatorName}`}</div>
          <div>{`Name: ${myRoutine.name}`}</div>
          <div>{`Goal: ${myRoutine.goal}`}</div>
        </div>

        <div className="activities">
          {myRoutine.activities.length ? (
            myRoutine.activities.map((activity) => {
              return (
                <div
                  className="activity"
                  key={`activity-${activity.id}`}
                >
                  <div>{`ID: ${activity.id}`}</div>
                  <div>{`Name: ${activity.name}`}</div>
                  <div>{`Description: ${activity.description}`}</div>
                  <div>{`Duration: ${activity.duration}`}</div>
                  <div>{`Count: ${activity.count}`}</div>
                </div>
              );
            })
          ) : (
            <div className="noActivity">This routine has no activity.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyRoutine;
