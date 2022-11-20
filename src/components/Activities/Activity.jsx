import React, { useEffect, useState } from "react";
import { RoutinesByActivity, ActivityUpdate } from "../";

const Activity = ({ activity, token }) => {
  //-------------UPDATE USE STATE----------------------
  const [activityEdit, setActivityEdit] = useState(activity);

  useEffect(() => {
    setActivityEdit(activityEdit);
  }, [activityEdit]);

  //------------FUNCTION FOR TOGGLING ROUTINE DISPLAY WHEN PRESSING ACTIVITY NAME BUTTON-----------------------
  const [displayRoutines, setDisplayRoutines] = useState(false);
  function handleClickActivity(event) {
    if (!displayRoutines) {
      event.preventDefault();
      setDisplayRoutines(true);
    } else {
      setDisplayRoutines(false);
    }
  }

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
            {displayRoutines ? (
              <div className="activity">
                <div>
                  <b>Routines this activity is found in:</b>
                </div>
                <RoutinesByActivity activity={activity} />
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
