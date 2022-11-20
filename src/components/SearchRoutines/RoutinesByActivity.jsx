import React, { useState, useEffect } from "react";
import { RoutineByActivity } from "../";
import { getPublicRoutinesByActivity } from "../../api";

const RoutinesByActivity = ({ activityId }) => {
  const [userRoutines, setUserRoutines] = useState([]);

  useEffect(() => {
    fetchPublicRoutinesByActivity();
  }, []);

  async function fetchPublicRoutinesByActivity() {
    let allRoutines = await getPublicRoutinesByActivity(
      activityId,
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
              <RoutineByActivity
                key={`userRoutineByActivity-${routine.id}`}
                routine={routine}
              />
            );
          })
        ) : (
          <div>
            Info wont show for some reason. Used same method as ROUTINE tab and
            it works there.
          </div>
        )}
      </div>
    </>
  );
};

export default RoutinesByActivity;
