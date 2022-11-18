import React, { useState } from "react";
import { updateRoutine } from "../../api";

const MyRoutineEdit = ({ routine, myRoutine, token }) => {
  const [message, setMessage] = useState("Enter routine name and description.");

  async function handleSubmitEditRoutine(event) {
    event.preventDefault();
    const name = event.target[0].value;
    const goal = event.target[1].value;
    let isPublic = event.target[2].value;
    
    if (isPublic === "Public") {
      isPublic = true;
    } else {
      isPublic = false;
    }
    const updatedRoutine = await updateRoutine(
      token,
      myRoutine.id,
      name,
      goal,
      isPublic
    );

    if (!updatedRoutine.error) {
      event.target[0].value = null;
      event.target[1].value = null;

      routine.name = updatedRoutine.name;
      routine.goal = updatedRoutine.goal;
      routine.isPublic = updatedRoutine.isPublic;

      setMessage(`You've successfully updated the routine`);
    } else {
      setMessage(`Routine with name "${name}" already exists`);
    }
  }

  return (
    <>
      <div className="editBox">
        <div className="routineInfo">
          <div>Edit Routine</div>
          <div>{message}</div>
          <form className="registerForm" onSubmit={handleSubmitEditRoutine}>
            <div>
              <label htmlFor="name">Name: </label>
              <input type="text" required></input>
            </div>
            <div>
              <label htmlFor="goal">Goal: </label>
              <input type="text" required></input>
            </div>
            <div>
              Privacy Setting:
              <select>
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>
            <div>
              <button className="button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyRoutineEdit;
