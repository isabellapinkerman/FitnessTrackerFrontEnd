import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { createActivity } from "../api";

const CreateActivity = ({token}) => {

const [message, setMessage] = useState('Please enter activity name and description')
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()
    const name = event.target[0].value;
    const description = event.target[1].value;
    const createdActivity = await createActivity(token, name, description);

    if (!createdActivity.error) {
      event.target[0].value = null;
      event.target[1].value = null;
      setMessage(`You've successfully created a new activity`)
    } else {setMessage(`Activity with activity name "${name}" already exists`)}
  }

  function redirectToMyRoutines(){
    let path = '/myRoutines'
    navigate(path)
  }

  return (
    <>
    <div>{message}</div>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Activity Name:</label>
        <input type="text" placeholder="Enter activity name" required></input>
        <label htmlFor="description">Description:</label>
        <input type="text" placeholder="Enter description" required></input>
        <button type="submit">Submit</button>
      </form>
      <button onClick={redirectToMyRoutines}className="button">Back</button>
    </>
  );
};

export default CreateActivity;
