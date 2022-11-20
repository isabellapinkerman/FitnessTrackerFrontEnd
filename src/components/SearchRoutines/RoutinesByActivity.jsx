import React from "react";
import { RoutineByActivity } from "..";

const RoutinesByActivity = ({ publicRoutines }) => {

  return (
    <>
    <div>this is routines by activity</div></>
 
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