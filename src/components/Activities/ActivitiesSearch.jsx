import React, { useEffect, useState } from "react";
import Activities from "./Activities";

const ActivitiesSearch = ({ allActivities, token }) => {
  const [activities, setActivities] = useState(allActivities);

  useEffect(() => {
    setActivities(allActivities);
  }, [allActivities]);

  function searchActivities(searchValue) {
    if (searchValue !== "") {
      const filteredActivities = allActivities.filter((activity) => {
        return Object.values(activity)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setActivities(filteredActivities);
    } else {
      setActivities(allActivities);
    }
  }

  const handleChange = (input) => {
    input.preventDefault();
    searchActivities(input.target.value);
  };

  return (
    <>
      <div className="activityPage">
        <div>
          <div className="searchBar">
          <form>
            <label htmlFor="search"> Search: </label>
            <input className="searchInput" type="text" onChange={handleChange} />
          </form>
          </div>
          <Activities
            token={token}
            activities={activities}
          />
        </div>
      </div>
    </>
  );
};

export default ActivitiesSearch;
