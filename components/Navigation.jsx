import React from "react";
import { Link } from "react-router-dom";

function Navigation({ token, setToken }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  return (
    <nav>
      <Link to="/">See All Books</Link>
      {token && <Link to="/account">My Account</Link>}
      {token ? (
        <button onClick={handleLogout}>logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export default Navigation;
