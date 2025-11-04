import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Account from "../components/Account";
import Books from "../components/Books";
import Login from "../components/Login";
import Navigation from "../components/Navigation";
import Register from "../components/Register";
import SingleBook from "../components/SingleBook";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    }
  }, []);
  return (
    <>
      <h1>BookBuddy</h1>
      <Navigation token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route
          path="/login"
          element={<Login setToken={setToken} token={token} />}
        />
        <Route
          path="/register"
          element={<Register setToken={setToken} token={token} />}
        />
        <Route path="/book/:id" element={<SingleBook token={token} />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<Books />} />
      </Routes>
    </>
  );
}

export default App;
