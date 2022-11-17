import React, { useEffect, useState } from "react";
import MyRoutines from "./MyRoutines";
import { getPublicRoutinesByUser } from "../../api";

const MyRoutinesSearch = ({ username, token }) => {
  const [myRoutines, setMyRoutines] = useState([]);

  useEffect(() => {
    async function fetchAllPublicRoutinesByUser() {
      const allMyRoutines = await getPublicRoutinesByUser(username, token);

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
      <div className="searchBar">
        <form>
          <label htmlFor="search"> Search: </label>
          <input type="text" onChange={handleChange} />
        </form>
      </div>
      <MyRoutines
        myRoutines={myRoutines}
        setMyRoutines={setMyRoutines}
        token={token}
      />
    </>
  );
};

export default MyRoutinesSearch;
