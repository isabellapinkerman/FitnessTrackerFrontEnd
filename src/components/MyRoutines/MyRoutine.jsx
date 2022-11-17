import React, { useEffect, useState } from "react";
import { deleteRoutine, updateRoutine } from "../../api";
import { Link } from "react-router-dom";

const MyRoutine = ({
  myRoutine,
  token,
  allPublicRoutinesByUser,
  setAllPublicRoutinesByUser,
}) => {
  const [message, setMessage] = useState(
    "Please enter routine name and description"
  );

  function handleChangeDelete() {
    async function deleteUserRoutine() {
      const deletedRoutine = await deleteRoutine(myRoutine.id, token);
      console.log(deletedRoutine);
    }
    deleteUserRoutine();
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
      setMessage(`You've successfully updated the routine`);
      setAllPublicRoutinesByUser([...allPublicRoutinesByUser, updatedRoutine]);
    } else {
      setMessage(`Routine with name "${name}" already exists`);
    }
  }

  return (
    <>
      <div className="routineBox">
        <div className="routineInfo">
          <div>Routine Info</div>
          <div>{`Created By: ${myRoutine.creatorName}`}</div>
          <div>{`Name: ${myRoutine.name}`}</div>
          <div>{`Goal: ${myRoutine.goal}`}</div>
          <div>
            Privacy Setting:{" "}
            {myRoutine.isPublic ? <span>Public</span> : <span>Private</span>}
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
          {myRoutine.activities.length ? (
            myRoutine.activities.map((activity) => {
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
