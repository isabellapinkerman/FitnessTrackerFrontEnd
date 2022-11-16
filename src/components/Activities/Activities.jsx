import React from "react";
import Activity from "./Activity";

const Activities = ({ activities }) => {
  return (
    <>
      <div>{`This is your Activities component`}</div>
      <div><div className="routines">
        {activities.length ? (
          activities.map((activity) => {
            return (
              <Activity
                key={`activity-${activity.id}`}
                activity={ activity }
              />
            );
          })
        ) : (
          <div>Loading Activities</div>
        )}</div>
      </div>
    </>
  );
};

export default Activities;
