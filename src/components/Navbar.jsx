import logo from "../images/Logo.png";
import { handleGoogleLogin } from "../auth";
import { auth, provider } from "../firebase";
import { useEffect, useRef, useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = ({ user, setUser }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const menuRef = useRef(null);

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
  return (
    <header className="top-nav flex w-full justify-between items-center px-40 h-25 ">
      <div className="left">
        <h1 className="top-nav-title flex font-bold text-xl">
          <div className="mr-1">
            <img className="logo" src={logo} alt="Logo" />
          </div>
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
                <div
                  onClick={async () => {
                    console.log("clicked");
                    await auth.signOut();
                    console.log("here");
                    localStorage.removeItem("user");
                    setProfileOpen(false);
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
        </div>
      )}
    </header>
  );
};

export default Navbar;
