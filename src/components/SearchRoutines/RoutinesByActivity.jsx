import React, { useState, useEffect } from "react";
import { RoutineByActivity } from "../";
import { getPublicRoutinesByActivity } from "../../api";

const RoutinesByActivity = ({ activity }) => {
  const [userRoutinesByActivity, setUserRoutinesByActivity] = useState([]);

  useEffect(() => {
    fetchPublicRoutinesByActivity();
  }, []);

  async function fetchPublicRoutinesByActivity() {
    let activityId = activity.id;
    let allActivities = await getPublicRoutinesByActivity(
      activityId,
      localStorage.getItem("token")
    );

    setUserRoutinesByActivity(allActivities);
  }

  return (
    <>
      <>
        <div>
          {userRoutinesByActivity.map((activity) => {
            return (
              <RoutineByActivity
                key={`activity-${activity.id}`}
                activity={activity}
              />
            );
          })}
        </div>
      </>
    </>
  );
};

export default RoutinesByActivity;

// <>
// <div>
//   {publicRoutines ? (
//     publicRoutines.map((publicRoutine) => {
//       return (
//         <RoutineByActivity
//           key={`publicRoutines-${publicRoutine.id}`}
//           publicRoutine={publicRoutine}
//         />
//       );
//     })
//   ) : (
//     <div>There are no public routines with this activity.</div>
//   )}
// </div>
// </>
