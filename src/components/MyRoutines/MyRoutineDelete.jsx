import React from "react";
import { deleteRoutine } from "../../api";

const MyRoutineDelete = ({ myRoutines, myRoutine, token, setMyRoutines }) => {
  async function handleChangeDeleteRoutine() {
    const deletedRoutine = await deleteRoutine(myRoutine.id, token);

    if (deletedRoutine.success) {
      myRoutines = myRoutines.filter(
        (routine) => routine.id !== deletedRoutine.id
      );
      setMyRoutines(myRoutines);
      console.log(`Routine with ID ${myRoutine.id} was deleted.`)
    }
  }

  return (
    <>
      <button onClick={handleChangeDeleteRoutine}>Delete Routine</button>
    </>
  );
};

export default MyRoutineDelete;
