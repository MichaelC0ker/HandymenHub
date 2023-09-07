import React from "react";
import "./NavBar.css";
import { Auth } from "aws-amplify";

interface NavbarProps {
  setComponent: (arg0: string) => void;
  signOut: any;
}

const Navbar: React.FC<NavbarProps> = ({ setComponent, signOut }) => {
  const handleLogout = (event: any) => {
    event.preventDefault();
    setTimeout(async () => {
      try {
        await Auth.signOut();
        window.location.href = "/";
      } catch (error) {
        console.log("error signing out: ", error);
        event.preventDefault();
      }
    });
  };

  return (
    <nav className="nav">
      <button onClick={() => setComponent("home")} className="site-title">
        Task Master
      </button>
      <ul>
        <li>
          <button onClick={() => setComponent("")} className="site-title">
            My Services
          </button>
        </li>
        <li>
          <button onClick={() => setComponent("post")} className="site-title">
            Post Details
          </button>
        </li>
        <li>
          <button className="site-title" onClick={handleLogout}>
            Log Out
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
