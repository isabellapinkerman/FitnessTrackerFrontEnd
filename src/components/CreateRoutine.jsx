import React from "react";
import { createRoutine } from "../api";
import { useNavigate } from "react-router-dom";

const CreateRoutine = () => {
const navigate = useNavigate()

  async function handleSubmit(event) {
    const token = localStorage.getItem("token");
    const name = event.target[0].value;
    const goal = event.target[1].value;
    const isPublic = event.target[2].value;
    if(isPublic === "Public"){
        isPublic = true
    }else{
        isPublic = false
    }
    console.log(token, name, goal, isPublic)
    // const createdRoutine = await createRoutine(token, name, goal, isPublic);
    // console.log(createdRoutine, "this is new activity");
    // if (createdRoutine) {
    //   event.target[0].value = null;
    //   event.target[1].value = null;
    // }
    // location.reload()
  }

  function redirect(){
    let path = '/myRoutines'
    navigate(path)
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
        <button type="submit">Submit</button>
      </form>
      <button onClick={redirect}className="button">Back</button>
    </>
  );
};

export default CreateRoutine;