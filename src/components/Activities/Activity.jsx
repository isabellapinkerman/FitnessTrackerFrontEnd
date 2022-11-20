import React, { useState } from "react";
import { RoutinesByActivity, ActivityUpdate } from "../";

const Activity = ({ activity, token }) => {
  const [displayRoutines, setDisplayRoutines] = useState(false);
  function handleClickActivity(event) {
    if (!displayRoutines) {
      event.preventDefault();
      setDisplayRoutines(true);
    } else {
      setDisplayRoutines(false);
    }
  }

  const [activityEdit, setActivityEdit] = useState(activity);

  return (
    <>
      <div className="activityBox">
        <div className="activityInfo">
          <div className="activityId">{`Activity ${activity.id}`}</div>
          <div>
            <button onClick={handleClickActivity}>
              🎖️ {activityEdit.name}
            </button>
          </div>
          <div className="activityDescription">{`Description: ${activityEdit.description}`}</div>
          <div>
            {localStorage.getItem("token") ? (
              <div>
                {displayRoutines ? (
                  <div className="activity">
                    <div>
                      <b>{`Routines activity "${activityEdit.name}" is found in:`}</b>
                    </div>
                    <RoutinesByActivity activityId={activity.id} />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        {localStorage.getItem("token") ? (
          <ActivityUpdate
            token={token}
            activity={activity}
            setActivityEdit={setActivityEdit}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Activity;
