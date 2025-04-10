import Button from "@mui/material/button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LogoutIcon from "@mui/icons-material/Logout";
import React, { useState, useEffect, useRef } from "react";``
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { handleGoogleLogin } from "./auth";
import { auth, provider } from "./firebase";
import ProtectedRoute from "./components/ProtectedRoute";
import modules from "./data/modules";
import Module1 from "./modules/Module1";
import Module2 from "./modules/Module2";
import Module3 from "./modules/Module3";
import Module4 from "./modules/Module4";
import Module5 from "./modules/Module5";

const Home = () => (
  <div className="content">
    <h1 className="title">Cybersecurity in Medical IoT</h1>
    <p className="description">
      Welcome to a hands-on training and awareness program designed for medical
      professionals, biomedical engineers, and healthcare IT staff. Navigate
      through 14 interactive modules including real-world simulations, OSINT
      reconnaissance, Burp Suite testing, and incident response drills.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {modules.map((module, index) => (
        <div
          key={index}
          className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
        >
          <Link to={`/module/${index + 1}`} className="block h-full w-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Module {index + 1}
            </h2>
            <p className="text-gray-600 mb-4">{module.title}</p>

            <div className="relative">
              <div className="text-blue-600 font-medium group-hover:-translate-y-2 transition-transform duration-300">
                Learning Objectives
              </div>
              
              {Array.isArray(module.objectives) && (
                <div className="mt-2 max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[500px] group-hover:opacity-100">
                  <ul className="list-disc ml-5 space-y-1 text-gray-700 text-sm">
                    {module.objectives.map((obj, i) => (
                      <li key={i}>{obj}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

const ModulePage = ({ id }) => {
  console.log(id);
  switch (parseInt(id)) {
    case 1: {
      return <Module1 title={modules[parseInt(id)]} />;
    }
    case 2: {
      return <Module2 title={modules[parseInt(id)]} />;
    }
    case 3: {
      return <Module3 title={modules[parseInt(id)]} />;
    }
    case 4: {
      return <Module4 title={modules[parseInt(id)]} />;
    }
    case 5: {
      return <Module5 title={modules[parseInt(id)]} />;
    }
  }
};

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [profileOpen, setProfileOpen] = useState(false);
  const menuRef = useRef(null);
  console.log(user);
  console.log(user?.photoURL);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // useEffect(()=>{
  //   setProfileOpen(false);
  // }, [])

  // useEffect(() => {

  //   getRedirectResult(auth)
  //   .then((result) => {
  //     console.log(result)
  //     if (result && result.user) {
  //       const user = result.user;
  //       setUser(user);
  //       console.log("Redirect login result:", user);
  //       localStorage.setItem("user", JSON.stringify(user));
  //     }
  //   })
  //   .catch((error) => {
  //     console.error("Error after redirect:", error);
  //   });

  // }, []);

  return (
    <Router>
      <div className={`app-wrapper`}>
        <main className="flex flex-col min-h-screen bg-[#f9f9fb]">
          <header className="top-nav flex w-full justify-between items-center px-40 h-25 ">
            <div className="left">
              <h1 className="top-nav-title flex font-bold text-xl">
                <div className="mr-1"><img className="logo" src="src/images/Logo.png" alt="Logo" /></div>
                <div className="ml-1">MedSecure</div>
              </h1>
            </div>
            {user ? (
              <div>
                <div
                  onClick={() => setProfileOpen((profileOpen) => !profileOpen)}
                  className="right flex gap-5 cursor-pointer"
                >
                  <img
                    referrerPolicy="no-referrer"
                    src={user.photoURL}
                    alt="User"
                    className="w-15 h-15 rounded-full border-2 border-[#677186]"
                  />
                </div>
                <div>
                  {profileOpen && (
                    <div
                      ref={menuRef}
                      className="fixed top-20 right-40 w-48 bg-white text-black p-1 rounded-md shadow-lg"
                    >
                      {/* <div className="flex items-center gap-2">
                       Dark Mode
                      </div> */}
                      <div
                        onClick={async () => {
                          console.log("clicked");
                          await auth.signOut();
                          console.log("here");
                          localStorage.removeItem("user");
                          setProfileOpen(false);
                          // await handleLogout();
                          setUser(null);
                        }}
                        className="flex gap-2 rounded-lg p-1 px-2 items-center cursor-pointer hover:bg-gray-100 "
                      >
                        <LogoutIcon fontSize="small" />
                        <button className="cursor-pointer">Logout</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="right flex gap-5">
                <button
                  className="cursor-pointer hover:bg-[#a3ea2a] hover:text-black transition  font-medium border p-2 px-4 border-[#a3ea2a] rounded-md text-[#f9f9fb]"
                  onClick={async () => {
                    const user = await handleGoogleLogin();
                    if (user) setUser(user);
                  }}
                >
                  Log In
                </button>
                {/* <button
                  className="font-medium cursor-pointer border p-2 px-4 hover:opacity-75 bg-[#a3ea2a] rounded-md text-black"
                  to="/register"
                >
                  Register
                </button> */}
              </div>
            )}
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/module/:id"
              element={
                <ProtectedRoute user={user}>
                  <ModuleWrapper />
                </ProtectedRoute>
              }
            />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> */}
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

const ModuleWrapper = () => {
  const id = window.location.pathname.split("/").pop();
  console.log(id);
  return <ModulePage id={id} />;
};

export default App;
