import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import {
  Navbar,
  MyRoutines,
  Login,
  Register,
  Home,
  CreateActivity,
  CreateRoutine,
  RoutinesSearch,
  ActivitiesSearch,
} from "./";
import {
  getAllPublicRoutines,
  getAllActivities,
  getPublicUserRoutines,
} from "../api";

const Main = () => {
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

  //-----------GET PUBLIC ROUTINES BY USER------------------------------

  const [allPublicRoutinesByUser, setAllPublicRoutinesByUser] = useState([]);
  useEffect(() => {
    async function fetchAllPublicRoutinesByUser() {
      const publicRoutinesByUser = await getPublicUserRoutines();
      setAllPublicRoutinesByUser(publicRoutinesByUser);
    }
    fetchAllPublicRoutinesByUser();
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
            <MyRoutines allPublicRoutinesByUser={allPublicRoutinesByUser} />
          }
        />
        <Route
          path="activities"
          element={<ActivitiesSearch allActivities={allActivities} />}
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="createActivity" element={<CreateActivity />} />
        <Route path="createRoutine" element={<CreateRoutine />} />
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
