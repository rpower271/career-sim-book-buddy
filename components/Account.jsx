import React, { useEffect, useState } from "react";
import axios from "axios";

function Account({ token }) {
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios(`${import.meta.env.VITE_API_BASE_URL}/api/users/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((data) => {
        console.log(data);
        setUser(data.data);
      })
      .catch((err) => console.log(err));
  }, [token]);
  return (
    <div>
      <h2>Account</h2>
      <p>(user?.firstname) (user?.lastname)</p>
      <p>(user?.email)</p>
    </div>
  );
}

export default Account;
