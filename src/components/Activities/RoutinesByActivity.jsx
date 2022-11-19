import React, {useEffect, useState} from "react";
import { getPublicRoutinesByActivity } from "../../api";
import { RoutineByActivity } from "..";

const RoutinesByActivity = ({ activityId, token }) => {

    const [publicRoutines, setPublicRoutines] = useState([])

//   async function publicRoutinesByActivity() {
//     const fetchPublicRoutines = await getPublicRoutinesByActivity(3, token);
//     setPublicRoutines(fetchPublicRoutines)
//     console.log(publicRoutines)
//   
  return (
    <>
      <div>
        {!publicRoutines.error ? (
          publicRoutines.map((publicRoutine) => {
            return <RoutineByActivity publicRoutine={publicRoutine}/>;
          })
        ) : (
          <div>There are no public routines with this activity.</div>
        )}
      </div>
    </>
  );
};

export default RoutinesByActivity;
