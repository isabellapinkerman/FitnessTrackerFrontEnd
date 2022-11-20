import React, { useState, useEffect } from "react";
import { RoutineByUser } from "../";
import { getPublicRoutinesByUser } from "../../api";

const RoutinesByUser = ({ creatorName }) => {

  const [userRoutines, setUserRoutines] = useState([]);

  async function fetchAllPublicRoutinesByUser() {
    const allRoutines = await getPublicRoutinesByUser(
      creatorName,
      localStorage.getItem("token")
    );
    setUserRoutines(allRoutines);

    console.log(allRoutines, "this is all routines in RoutinesByUser")
  }

  useEffect(() => {
    fetchAllPublicRoutinesByUser();
  }, []);

  return (
    <>
      <div>
        {userRoutines.length ? (
          userRoutines.map((routine) => {
            return (
              <RoutineByUser
                key={`userRoutine-${routine.id}`}
                routine={routine}
              />
            );
          })
        ) : (
          <div>There are no routines by this user.</div>
        )}
      </div>
    </>
  );
};

export default RoutinesByUser;
