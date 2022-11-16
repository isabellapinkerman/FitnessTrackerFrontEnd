import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  getAllActivities,
  getAllPublicRoutines,
  getPublicUserRoutines,
  getUserData,
} from "../api";
import {
  ActivitiesSearch,
  CreateActivity,
  CreateRoutine,
  Home,
  Login,
  MyRoutines,
  Navbar,
  Register,
  RoutinesSearch,
} from "./";

const Main = () => {

  //-----------GET USER DATA------------------------------

  const token = localStorage.getItem("token");

  const [user, setUser] = useState();
  useEffect(() => {
    async function fetchUserData() {
      const userData = await getUserData(token);
      setUser(userData);
    }
    fetchUserData();
  }, []);

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
      const publicRoutinesByUser = await getPublicUserRoutines(user, token);
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
        <Route path="createActivity" element={<CreateActivity token={token}/>} />
        <Route path="createRoutine" element={<CreateRoutine  />} />
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
