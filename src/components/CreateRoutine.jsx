import React from "react";
import { createRoutine } from "../api";
import { useNavigate } from "react-router-dom";

const CreateRoutine = () => {
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const name = event.target[0].value;
    const goal = event.target[1].value;
    let isPublic = event.target[2].value;

    if (isPublic === "Public") {
      isPublic = true;
    } else {
      isPublic = false;
    }
    const createdRoutine = await createRoutine(token, name, goal, isPublic);

    if (createdRoutine) {
      event.target[0].value = null;
      event.target[1].value = null;
    }

    console.log(createdRoutine, "this is new activity");
  }

  function redirect() {
    let path = "/routines";
    navigate(path);
    location.reload();
  }

  return (
    <>
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
      <button onClick={redirect} className="button">
        Back
      </button>
    </>
  );
};

export default CreateRoutine;
