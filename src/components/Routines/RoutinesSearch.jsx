import React, { useEffect, useState } from "react";
import Routines from "./Routines";

const RoutinesSearch = ({ allRoutines }) => {
  const [routines, setRoutines] = useState(allRoutines);

  useEffect(() => {
    setRoutines(allRoutines);
  }, [allRoutines]);

  const handleChange = (input) => {
    input.preventDefault();
    searchRoutines(input.target.value);
  };

  const searchRoutines = (searchValue) => {
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
  };

  return (
    <>
      <div>{`This is your Routines component`}</div>
      <form>
        <label htmlFor="search"> Search: </label>
        <input type="text" onChange={handleChange} />
      </form>
      <Routines routines={routines} />
    </>
  );
};

export default RoutinesSearch;
