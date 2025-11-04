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
        setBooks(data.data.reservations);
      })
      .catch((err) => console.log(err));
  }, [token]);

  const handleReturnBook = async (id) => {
    try {
      const result = await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/api/reservations/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // console.log(result);
      if (result.data.id) {
        const bookData = await axios(
          `${import.meta.env.VITE_API_BASE_URL}/api/users/me`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setBooks(bookData.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Account</h2>
      <p>
        {user?.firstname} {user?.lastname}
      </p>
      <p>{user?.email}</p>
      {books.map((data) => (
        <div
          className="book-card"
          key={data.id}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>{data.title}</h2>
          <img src={data.coverimage} alt={data.title} />
          <button onClick={() => handleReturnBook(data.id)}>Return Book</button>
        </div>
      ))}
    </div>
  );
}

export default Account;
