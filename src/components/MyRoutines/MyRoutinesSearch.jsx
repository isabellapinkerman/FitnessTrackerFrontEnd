import React, { useEffect, useState } from "react";
import { MyRoutines } from "..";
import { getPublicRoutinesByUser } from "../../api";
import "./CSS/myRoutines.css"

const MyRoutinesSearch = ({ token, allActivities }) => {
  const [myRoutines, setMyRoutines] = useState([]);

  useEffect(() => {
    async function fetchAllPublicRoutinesByUser() {
      const allMyRoutines = await getPublicRoutinesByUser(localStorage.getItem("username"), localStorage.getItem("token"));

      setMyRoutines(allMyRoutines);
    }
    fetchAllPublicRoutinesByUser();
  }, []);

  const handleChange = (input) => {
    input.preventDefault();
    searchRoutines(input.target.value);
  };

  const searchRoutines = (searchValue) => {
    if (searchValue !== "") {
      const filteredMyRoutines = myRoutines.filter((myRoutine) => {
        return Object.values(myRoutine)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setMyRoutines(filteredMyRoutines);
    } else {
      setMyRoutines(myRoutines);
    }
  };

  return (
    <>
      <div className="">
        <form>
          <label htmlFor="search"> Search: </label>
          <input className="" type="text" onChange={handleChange} />
        </form>
      </div>
      <MyRoutines
        myRoutines={myRoutines}
        setMyRoutines={setMyRoutines}
        token={token}
        allActivities={allActivities}
      />
    </>
  );
};

export default MyRoutinesSearch;
