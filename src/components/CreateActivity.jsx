import React from "react";
import {useNavigate } from "react-router-dom";
import { createActivity } from "../api";

const CreateActivity = () => {
  const navigate = useNavigate()

  async function handleSubmit(event) {
    const token = localStorage.getItem("token");
    const name = event.target[0].value;
    const description = event.target[1].value;
    const createdActivity = await createActivity(token, name, description);

    console.log(createdActivity, "this is new activity");

    if (createdActivity) {
      event.target[0].value = null;
      event.target[1].value = null;
    }
    location.reload()
  }

  function redirect(){
    let path = '/myRoutines'
    navigate(path)
  }

  return (
    <>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Activity Name:</label>
        <input type="text" placeholder="Enter activity name" required></input>
        <label htmlFor="description">Description:</label>
        <input type="text" placeholder="Enter description" required></input>
        <button className="button" type="submit">Submit</button>
      </form>
      <button onClick={redirect}className="button">Back</button>
    </>
  );
};

export default CreateActivity;
