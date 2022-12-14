//import React, { Child } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Calc from "./Calc";
import { Home } from "./Home";
import Increment from "./increment";
import Child from "./Child";
import NavBar from "./navBar/NavBar";
import Login from "./Login"

export const AppRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Increment />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/More" element={<Home/>}/>
        <Route path="/calculator">
          <Route index element={<Calc />} />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
