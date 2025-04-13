
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer, toast } from "react-toastify";

import Home, { ModuleWrapper } from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
 
  return (
    <Router>
      <ToastContainer />
      <div className={`app-wrapper`}>
        <main className="flex flex-col min-h-screen bg-[#f9f9fb]">
          <Navbar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/" element={<Home user={user}/>} />
            <Route
              path="/module/:id"
              element={
                <ProtectedRoute user={user}>
                  <ModuleWrapper />
                </ProtectedRoute>
              }
            />
          </Routes>

          <footer className="footer bg-[#677186] text-white p-4">
            <p>
              © {new Date().getFullYear()} MedSecure Learning — All rights
              reserved
            </p>
          </footer>
        </main>
      </div>
    </Router>
  );
};


export default App;
