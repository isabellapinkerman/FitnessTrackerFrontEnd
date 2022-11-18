import React, { useEffect, useState } from "react";
import { Routines } from "..";

const RoutinesSearch = ({ allRoutines, token }) => {
  const [routines, setRoutines] = useState(allRoutines);

  useEffect(() => {
    setRoutines(allRoutines);
  }, [allRoutines]);

  function searchRoutines(searchValue) {
    if (searchValue !== "") {
      const filteredRoutines = allRoutines.filter((routine) => {
        return Object.values(routine)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setRoutines(filteredRoutines);
    } else {
      setRoutines(allRoutines);
    }
  }

  const handleChange = (input) => {
    input.preventDefault();
    searchRoutines(input.target.value);
  };

  return (
    <>
      <div className="searchBar">
        <form >
          <label htmlFor="search"> Search: </label>
          <input className="searchInput" type="text" onChange={handleChange} />
        </form>
      </div>
      <Routines routines={routines} />
    </>
  );
};

export default RoutinesSearch;
