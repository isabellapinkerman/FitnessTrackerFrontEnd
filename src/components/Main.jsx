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
  ActivityCreate,
  RoutineCreate,
  Home,
  Login,
  Navbar,
  Register,
  RoutinesSearch,
  MyRoutinesSearch,
  Footer,
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
      const publicRoutinesByUser = await getPublicUserRoutines(
        user.username,
        token
      );
      setAllPublicRoutinesByUser(publicRoutinesByUser);
    }
    if (user) {
      fetchAllPublicRoutinesByUser();
    }
  }, [user]);

  //-----------ROUTER------------------------------

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route
          path="routines"
          element={<RoutinesSearch allRoutines={allRoutines} token={token} />}
        />
        <Route
          path="myRoutines"
          element={
            <MyRoutinesSearch
              allPublicRoutinesByUser={allPublicRoutinesByUser}
              setAllPublicRoutinesByUser={setAllPublicRoutinesByUser}
              token={token}
              user={user}
            />
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
