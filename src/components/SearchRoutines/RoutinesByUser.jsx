import React, { useState, useEffect } from "react";
import { RoutineByUser } from "../";
import { getPublicRoutinesByUser } from "../../api";

const RoutinesByUser = ({ creatorName }) => {
  const [userRoutines, setUserRoutines] = useState([]);

  useEffect(() => {
    fetchAllPublicRoutinesByUser();
  }, []);

  async function fetchAllPublicRoutinesByUser() {
    let allRoutines = await getPublicRoutinesByUser(
      creatorName,
      localStorage.getItem("token")
    );

    setUserRoutines(allRoutines);
  }

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
