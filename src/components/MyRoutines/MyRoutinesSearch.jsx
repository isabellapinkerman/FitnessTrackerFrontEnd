import React, { useEffect, useState } from "react";
import MyRoutines from "./MyRoutines";

const MyRoutinesSearch = ({ allPublicRoutinesByUser, setAllPublicRoutinesByUser,token }) => {

    console.log(allPublicRoutinesByUser)
    console.log(token)
  const [myRoutines, setMyRoutines] = useState(allPublicRoutinesByUser);

  useEffect(() => {
    setAllPublicRoutinesByUser(allPublicRoutinesByUser);
  }, [allPublicRoutinesByUser]);

  const handleChange = (input) => {
    input.preventDefault();
    searchRoutines(input.target.value);
  };

  const searchRoutines = (searchValue) => {
    if (searchValue !== "") {
      const filteredMyRoutines = allPublicRoutinesByUser.filter((myRoutine) => {
        return Object.values(myRoutine)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setMyRoutines(filteredMyRoutines);
    } else {
        setMyRoutines(allPublicRoutinesByUser);
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
      <MyRoutines myRoutines={myRoutines} token={token} />
    </>
  );
};

export default MyRoutinesSearch;
