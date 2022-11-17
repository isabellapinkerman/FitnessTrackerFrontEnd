import React, { useState } from "react";
import { deleteRoutine, updateRoutine } from "../../api";

const MyRoutine = ({ myRoutines, setMyRoutines, myRoutine, token }) => {
  const [routine, setRoutine] = useState(myRoutine);

  const [message, setMessage] = useState(
    "Please enter routine name and description"
  );

  async function handleChangeDelete() {
    const deletedRoutine = await deleteRoutine(myRoutine.id, token);

    if (deletedRoutine.success) {
      myRoutines = myRoutines.filter(
        (routine) => routine.id !== deletedRoutine.id
      );
      setMyRoutines(myRoutines);
    }
  }

  async function handleSubmitEdit(event) {
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

      setRoutine(routine);

      setMessage(`You've successfully updated the routine`);
    } else {
      setMessage(`Routine with name "${name}" already exists`);
    }
  }

  return (
    <>
      <div className="routineBox">
        <div className="routineInfo">
          <div>Routine Info</div>
          <div>{`Created By: ${routine.creatorName}`}</div>
          <div>{`Name: ${routine.name}`}</div>
          <div>{`Goal: ${routine.goal}`}</div>
          <div>
            Privacy Setting:{" "}
            {routine.isPublic ? <span>Public</span> : <span>Private</span>}
          </div>
          <button onClick={handleChangeDelete}>Delete Routine</button>
        </div>
        <div className="routineInfo">
          <div>Routine Edit</div>
          <div>{message}</div>
          <form className="registerForm" onSubmit={handleSubmitEdit}>
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

        <div className="activities">
          {routine.activities.length ? (
            routine.activities.map((activity) => {
              return (
                <div className="activity" key={`activity-${activity.id}`}>
                  <div>{`ID: ${activity.id}`}</div>
                  <div>{`Name: ${activity.name}`}</div>
                  <div>{`Description: ${activity.description}`}</div>
                  <div>{`Duration: ${activity.duration}`}</div>
                  <div>{`Count: ${activity.count}`}</div>
                </div>
              );
            })
          ) : (
            <div className="noActivity">This routine has no activity.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyRoutine;
