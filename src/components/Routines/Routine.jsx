import React, { useEffect } from "react";

const Routine = ({ routine }) => {
  return (
    <>
      <div className="routineBox">
        <div className="routineInfo">
          <div>Routine Info</div>
          <div>{`Created By: ${routine.creatorName}`}</div>
          <div>{`Name: ${routine.name}`}</div>
          <div>{`Goal: ${routine.goal}`}</div>
        </div>
        <div className="activities">
          {routine.activities ? (
            routine.activities.map((activity) => {
              return (
                <div
                  className="activity"
                  key={`activity-${activity.id}`}
                  routine={routine}
                >
                  {" "}
                  <div>Activity</div>
                  <div>
                    {activity ? (
                      <div>
                        <div>{`Name: ${activity.name}`}</div>
                        <div>{`Description: ${activity.description}`}</div>
                        <div>{`Duration: ${activity.duration}`}</div>
                        <div>{`Count: ${activity.count}`}</div>
                      </div>
                    ) : (
                      <div className="noActivity">This routine has no activity</div>
                    )}
                  </div>
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

export default Routine;
