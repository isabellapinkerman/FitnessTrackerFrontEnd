import React from "react";
import { createRoutine } from "../api";

const CreateRoutine = () => {

    return <div>Hello</div>
//   async function handleSubmit(event) {
//     const token = localStorage.getItem("token");
//     const name = event.target[3].value;
//     const goal = event.target[4].value;
//     const isPublic = event.target[2].value;

//     const createdRoutine = await createRoutine(token, name, description);

//     console.log(createdActivity, "this is new activity");

//     if (createdActivity) {
//       event.target[1].value = null;
//       event.target[2].value = null;
//     }
//     location.reload()
//   }

//   return (
//     <>
//       <form className="registerForm" onSubmit={handleSubmit}>
//         <label htmlFor="name">Activity Name:</label>
//         <input type="text" placeholder="Enter activity name" required></input>
//         <label htmlFor="goal">Goal:</label>
//         <input type="text" placeholder="Enter description" required></input>
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
};

export default CreateRoutine;
