import React, { useEffect, useState } from "react";
import Activities from "./Activities";

const ActivitiesSearch = ({ allActivities, setAllActivities, token }) => {
  const [activities, setActivities] = useState(allActivities);

  useEffect(() => {
    setActivities(allActivities);
  }, [allActivities]);

  const handleChange = (input) => {
    input.preventDefault();
    searchActivities(input.target.value);
  };

  const searchActivities = (searchValue) => {
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
  };

  return (
    <>
    <div className="activityPage">
    <div className="searchBar">
      <form>
        <label htmlFor="search"> Search: </label>
        <input type="text" onChange={handleChange} />
      </form>
    </div>
      <Activities activities={activities} token={token} setAllActivities={setAllActivities}/>
   </div> 
   </>
  );
};

export default ActivitiesSearch;
