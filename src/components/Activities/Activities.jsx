import React from "react";
import { Link } from "react-router-dom";
import Activity from "./Activity";

const Activities = ({ activities, setActivities, token }) => {
  return (
    <>
      <div>
        {token ? (
          <Link to={"/createActivity"}>
            <button className="createActivity">Create Activity</button>
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div className="routines">
        {activities.length ? (
          activities.map((activity) => {
            return (
              <Activity
                key={`activity-${activity.id}`}
                activity={activity}
                setActivities={setActivities}
                token={token}
              />
            );
          })
        ) : (
          <div>Activity Does Not Exist</div>
        )}
      </div>
    </>
  );
};

export default Activities;
