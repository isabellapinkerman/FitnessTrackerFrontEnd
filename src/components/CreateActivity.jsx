import React from "react";
import { createActivity } from "../api";

const CreateActivity = () => {
  async function handleSubmit(event) {
    const token = localStorage.getItem("token");
    const name = event.target[1].value;
    const description = event.target[2].value;
    const createdActivity = await createActivity(token, name, description);

    console.log(createdActivity, "this is new activity");

    if (createdActivity) {
      event.target[1].value = null;
      event.target[2].value = null;
    }
    location.reload()
  }

  return (
    <>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Activity Name:</label>
        <input type="text" placeholder="Enter activity name" required></input>
        <label htmlFor="description">Description:</label>
        <input type="text" placeholder="Enter description" required></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreateActivity;
