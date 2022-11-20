import React, { useState } from "react";
import { MyRoutines } from "..";
import "./CSS/myRoutines.css";

const MyRoutinesSearch = ({
  token,
  allActivities,
  userRoutines,
  setUserRoutines,
}) => {
  const handleChange = (input) => {
    input.preventDefault();
    searchRoutines(input.target.value);
  };

  const searchRoutines = (searchValue) => {
    if (searchValue !== "") {
      const filteredMyRoutines = userRoutines.filter((myRoutine) => {
        return Object.values(myRoutine)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setUserRoutines(filteredMyRoutines);
    } else {
      setUserRoutines(userRoutines);
    }
  };

  return (
    <>
      <div className="rbRoutineSearch">
        <form>
          <label htmlFor="search"> Search Your Routine: </label>
          <input className="" type="text" onChange={handleChange} />
        </form>
      </div>
      <MyRoutines
        token={token}
        userRoutines={userRoutines}
        setUserRoutines={setUserRoutines}
        allActivities={allActivities}
      />
    </>
  );
};

export default MyRoutinesSearch;
