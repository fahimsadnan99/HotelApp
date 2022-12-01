import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import Footer from "./Layouts/Footer";
import Navbar from "./Layouts/Navbar";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default App;
