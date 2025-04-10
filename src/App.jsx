import Button from "@mui/material/button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LogoutIcon from "@mui/icons-material/Logout";
import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import "./App.css";
import { handleGoogleLogin,  } from "./auth";
import { auth, provider } from "./firebase";
import modules from "./data/modules";

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
      {modules.map((module, index) => (
        <Card key={index} className="card airy-card">
          <CardContent>
            <h2 className="card-title">Module {index + 1}</h2>
            <p className="card-text">{module.title}</p>
            <p className="card-summary">{module.summary}</p>
            <Link to={`/module/${index}`}>
              <Button>Start Module</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const ModulePage = ({ id }) => {
  const title = modules[parseInt(id)];
  const module = modules[index];
  const renderModuleComponent = (index) => {
    switch (index) {
      case 0:
        return <introCyberSec />;
      case 1:
        return <treatLandscape />;
      case 2:
        return <netSecBasics />;
      case 3:
        return <deviceHardening />;
      case 4:
        return <osintShodun />;
      case 5:
        return <secureDataManagement />;
      case 6:
        return <TreatLandscape />;
      case 7:
        return <TreatLandscape />;
      case 8:
        return <TreatLandscape />;
      case 9:
        return <TreatLandscape />;
      case 10:
        return <TreatLandscape />;
      case 11:
        return <TreatLandscape />;
      case 12:
        return <TreatLandscape />;
      case 13:
        return <TreatLandscape />;
    }
  }
  return (
    <div className="content">
      <h1 className="module-title">
        Module {parseInt(id) + 1}: {title}
      </h1>
      {/* <p className="module-description">
        [This is where interactive content, code labs, and embedded simulations
        will go. Include command line demos, lab environments, and quizzes.
        Integrate VM-based scenarios with tools like Shodan, Burp Suite,
        Wireshark, etc.]
      </p> */}
      <div
        className="module-description"
        dangerouslySetInnerHTML={{ __html: modulesContent[id].content }}
        ></div>
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [profileOpen, setProfileOpen] = useState(false);
  const menuRef = useRef(null)
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
                    <div ref={menuRef} className="fixed top-20 right-40 w-48 bg-white text-black p-1 rounded-md shadow-lg">
                      {/* <div className="flex items-center gap-2">
                       Dark Mode
                      </div> */}
                      <div
                        onClick={async () => {
                          console.log("clicked");
                          await auth.signOut();
                          console.log("here");
                          localStorage.removeItem("user");
                          setProfileOpen(false)
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
            <Route path="/module/:id" element={<ModuleWrapper />} />
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
