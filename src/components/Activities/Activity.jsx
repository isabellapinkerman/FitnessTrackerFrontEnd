import React from "react";

const Activity = (props) => {
  const activity = props.activity;

  return (
    <>
      <div className="routineBox">
        <div className="routineInfo">
        <div>Activity Info</div>
          <div>{`Name: ${activity.name}`}</div>
          <div>{`Description: ${activity.description}`}</div>
        </div>
      </div>
    </>
  );
};

export default Activity;
