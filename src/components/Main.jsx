import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { getAllActivities, getAllPublicRoutines } from "../api";
import {
  ActivitiesSearch,
  ActivityCreate,
  RoutineCreate,
  Home,
  Login,
  Navbar,
  Register,
  RoutinesSearch,
  MyRoutinesSearch,
  RoutinesByActivity,
} from "./";

const Main = () => {
  //-----------GET USER DATA------------------------------

  const token = localStorage.getItem("token");

  //-----------GET ALL ROUTINES------------------------------
  const [allRoutines, setAllRoutines] = useState([]);
  useEffect(() => {
    async function fetchAllPublicRoutines() {
      const allPublicRoutines = await getAllPublicRoutines();
      setAllRoutines(allPublicRoutines);
    }
    fetchAllPublicRoutines();
  }, []);

  //-----------GET ALL ACTIVITIES------------------------------
  const [allActivities, setAllActivities] = useState([]);
  useEffect(() => {
    async function fetchAllActivities() {
      const activities = await getAllActivities();
      setAllActivities(activities);
    }
    fetchAllActivities();
  }, []);

  //-----------ROUTER------------------------------

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route
          path="routines"
          element={<RoutinesSearch allRoutines={allRoutines} />}
        />
        <Route
          path="myRoutines"
          element={
            <MyRoutinesSearch token={token} allActivities={allActivities} />
          }
        />
        <Route
          path="activities"
          element={
            <ActivitiesSearch allActivities={allActivities} token={token} />
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="createActivity"
          element={
            <ActivityCreate
              token={token}
              allActivities={allActivities}
              setAllActivities={setAllActivities}
            />
          }
        />
        <Route
          path="createRoutine"
          element={
            <RoutineCreate
              token={token}
              allRoutines={allRoutines}
              setAllRoutines={setAllRoutines}
            />
          }
        />

        <Route
          path="routinesByActivity"
          element={<RoutinesByActivity token={token} />}
        />
      </Route>
    )
  );
  return (
    <div id="main">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Main;
