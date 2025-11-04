import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function SingleBook({ token }) {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  useEffect(() => {
    axios(`${import.meta.env.VITE_API_BASE_URL}/api/books/${id}`)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="single-book-container">
      <h2>{book?.title}</h2>
      <img src={book?.coverimage} alt={book?.title} />
      <p>{book?.description}</p>
      <p>
        {!token && (
          <>
            <Link to="/login"> Login</Link> to check out this book
          </>
        )}
        {token &&
          (book?.available ? (
            <button>check out book</button>
          ) : (
            <p>Book not available</p>
          ))}
      </p>
    </div>
  );
}

export default SingleBook;
