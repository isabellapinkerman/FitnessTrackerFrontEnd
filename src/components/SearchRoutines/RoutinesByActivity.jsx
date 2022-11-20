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
      <div>
        {userRoutinesByActivity ? (
          userRoutinesByActivity.map((routine) => {
            return (
              <RoutineByActivity
                key={`routineByActivity-${routine.id}`}
                routine={routine}
              />
            );
          })
        ) : (
          <div>This activity is not in any routine.</div>
        )}
      </div>
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
