import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Navbar, Routines, MyRoutines, Activities, Login, Register, Home } from "./";
import { getAllPublicRoutines } from "../api";

const Main = () => {
  const [allRoutines, setAllRoutines] = useState([]);
  useEffect(() => {
    async function fetchAllPublicRoutines() {
      const allPublicRoutines = await getAllPublicRoutines();
      setAllRoutines(allPublicRoutines);
    }
    fetchAllPublicRoutines();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="routines" element={<Routines allRoutines = {allRoutines}/>} />
        <Route path="myRoutines" element={<MyRoutines allRoutines = {allRoutines}/>} />
        <Route path="activities" element={<Activities allRoutines = {allRoutines}/>} />
        <Route path="login" element={<Login allRoutines = {allRoutines}/>} />
        <Route path="register" element={<Register allRoutines = {allRoutines}/>} />

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
