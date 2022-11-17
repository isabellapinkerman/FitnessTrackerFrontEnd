import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createRoutine } from "../../api";

const RoutineCreate = ({ allRoutines, setAllRoutines, token }) => {
  const [message, setMessage] = useState(
    "Please enter activity name and description"
  );

  async function handleSubmit(event) {
    event.preventDefault();
    const name = event.target[0].value;
    const goal = event.target[1].value;
    let isPublic = event.target[2].value;

    if (isPublic === "Public") {
      isPublic = true;
    } else {
      isPublic = false;
    }
    const createdRoutine = await createRoutine(token, name, goal, isPublic);

    if (!createdRoutine.error) {
      event.target[0].value = null;
      event.target[1].value = null;
      setMessage(`You've successfully created a new routine`);
      if (createdRoutine.isPublic) {
        setAllRoutines([...allRoutines, createdRoutine]);
      }
    } else {
      setMessage(`Routine with name "${name}" already exists`);
    }
  }

  return (
    <>
      <div>{message}</div>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Routine Name:</label>
        <input type="text" placeholder="Enter activity name" required></input>
        <label htmlFor="goal">Goal:</label>
        <input type="text" placeholder="Enter description" required></input>
        <select>
          <option>Public</option>
          <option>Private</option>
        </select>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
      <Link to="/routines">
        <button className="button">Back</button>
      </Link>
    </>
  );
};

export default RoutineCreate;
