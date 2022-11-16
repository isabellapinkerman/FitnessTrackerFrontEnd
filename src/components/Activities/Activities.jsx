import React from "react";
import { Link } from "react-router-dom";
import Activity from "./Activity";

const Activities = ({ activities, token }) => {
  return (
    <>
      <div>
        {token ? (
          <Link to={"/createActivity"}>
            <button>Create Activity</button>
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div>
        <div className="routines">
          {activities.length ? (
            activities.map((activity) => {
              return (
                <Activity key={`activity-${activity.id}`} activity={activity} />
              );
            })
          ) : (
            <div>Loading Activities</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Activities;
