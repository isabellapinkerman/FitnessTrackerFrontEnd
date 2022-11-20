import React from "react";
import { deleteRoutine } from "../../api";

const MyRoutineDelete = ({ userRoutines, myRoutine, token, setUserRoutines }) => {
  async function handleChangeDeleteRoutine() {
    const deletedRoutine = await deleteRoutine(myRoutine.id, token);

    if (deletedRoutine.success) {
      userRoutines = userRoutines.filter(
        (routine) => routine.id !== deletedRoutine.id
      );
      setUserRoutines(userRoutines);
      console.log(`Routine with ID ${myRoutine.id} was deleted`)
    }
  }

  return (
    <>
      <button className="rbDeleteButton" onClick={handleChangeDeleteRoutine}>Delete Routine</button>
    </>
  );
};

export default MyRoutineDelete;
