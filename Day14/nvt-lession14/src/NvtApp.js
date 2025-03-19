import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NvtNavBar from "./components/NvtNavBar";
import NvtHome from "./components/NvtHome";
import NvtListUser from "./components/NvtListUser";
import NvtCreateUser from "./components/NvtCreateUser";
import NvtEditUser from "./components/NvtEditUser";
import "./Nvt.css";
function NvtApp() {
  return (
    <Router>
      <NvtNavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<NvtHome />} />
          <Route path="/list-user" element={<NvtListUser />} />
          <Route path="/create-user" element={<NvtCreateUser />} />
          <Route path="/edit-user/:id" element={<NvtEditUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default NvtApp;
