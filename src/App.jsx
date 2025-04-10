import Button from "@mui/material/button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LogoutIcon from "@mui/icons-material/Logout";
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { handleGoogleLogin } from "./auth";
import { auth, provider } from "./firebase";
import ProtectedRoute from "./components/ProtectedRoute";
import Module1 from "./modules/Module1";
import Module6 from "./modules/Module6";
import Module7 from "./modules/Module7";

const modules = [
  "Introduction to Medical IoT",
  "Threat Landscape",
  "Network Security Basics",
  "Device Hardening",
  "OSINT & Shodan",
  "Secure Data Management",
  "Access Control",
  "Web & API Testing",
  "Password Security",
  "Incident Response",
  "Compliance & Monitoring",
  "Security Culture",
  "Hands-on Labs",
  "Final Assessment",
];

const Home = () => (
  <div className="content">
    <h1 className="title">Cybersecurity in Medical IoT</h1>
    <p className="description">
      Welcome to a hands-on training and awareness program designed for medical
      professionals, biomedical engineers, and healthcare IT staff. Navigate
      through 14 interactive modules including real-world simulations, OSINT
      reconnaissance, Burp Suite testing, and incident response drills.
    </p>
    <div className="grid">
      {modules.map((title, index) => (
        <Card key={index} className="card airy-card">
          <CardContent>
            <h2 className="card-title">Module {index + 1}</h2>
            <p className="card-text">{title}</p>
            <Link to={`/module/${index + 1}`}>
              <Button>Start Module</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const ModulePage = ({ id }) => {
  console.log(id);
  const Id = parseInt(id)-1
  switch (parseInt(id)) {
    case 1: {
      return <Module1 title={modules[Id]} />;
    }
    case 6: 
      return <Module6 title={modules[Id]} />;
    case 7: 
      return <Module7 title={modules[Id]} />;
    
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
              <h1 className="top-nav-title font-bold text-xl">MedSecure</h1>
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
  return <ModulePage id={id} />;
};

export default App;
