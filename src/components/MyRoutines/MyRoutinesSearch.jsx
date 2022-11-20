import React, { useState, useEffect } from "react";
import { MyRoutines } from "..";
import { getPublicRoutinesByUser } from "../../api";
import "./CSS/myRoutines.css";

const MyRoutinesSearch = ({
  token,
  allActivities,
}) => {
  const [userRoutines, setUserRoutines] = useState([]);

  async function fetchAllPublicRoutinesByUser() {
    const allRoutines = await getPublicRoutinesByUser(
      localStorage.getItem("username"),
      localStorage.getItem("token")
    );
    setUserRoutines(allRoutines);
  }

  useEffect(() => {
    fetchAllPublicRoutinesByUser();
  }, []);

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
        allActivities={allActivities}
        userRoutines={userRoutines}
        setUserRoutines={setUserRoutines}
      />
    </>
  );
};

export default MyRoutinesSearch;
