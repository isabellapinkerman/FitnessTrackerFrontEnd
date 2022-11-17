import React from "react";
import MyRoutine from "./MyRoutine";
import { Link } from "react-router-dom";

const MyRoutines = ({ myRoutines, token, setMyRoutines }) => {
  return (
    <>
      <div>
        {token ? (
          <Link to={"/createRoutines"}>
            <button className="createRoutines">Create Routines</button>
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div className="routines">
        {myRoutines.length ? (
          myRoutines.map((myRoutine) => {
            return (
              <MyRoutine
                key={`myRoutine-${myRoutine.id}`}
                myRoutine={myRoutine}
                token={token}
                myRoutines={myRoutines}
                setMyRoutines={setMyRoutines}
              />
            );
          })
        ) : (
          <div>User has no routines</div>
        )}
      </div>
    </>
  );
};

export default MyRoutines;
