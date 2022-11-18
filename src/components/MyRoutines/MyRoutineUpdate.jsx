import React, { useState } from "react";
import { updateRoutine } from "../../api";

const MyRoutineUpdate = ({ myRoutine, token, setRoutineInfo }) => {
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
      setRoutineInfo(updatedRoutine);
      setMessage(`You've successfully updated the routine`);
      console.log(
        `Routine with ID ${myRoutine.id} was updated and set to ${event.target[2].value}.`
      );
    } else {
      setMessage(`Routine with name "${name}" already exists`);
    }
  }

  return (
    <>
      <div className="">
        <div className="">
          <div>Edit Routine</div>
          <div>{message}</div>
          <form className="" onSubmit={handleSubmitEditRoutine}>
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
              <button className="rbSubmitButton" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyRoutineUpdate;
