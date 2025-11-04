import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import axios from "axios";
import BookCardList from "./BookCardList";

function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios(`${import.meta.env.VITE_API_BASE_URL}/api/books`)
      .then((data) => {
        console.log(data.data);
        setBooks(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="books-page">
      <BookCardList books={books} />
    </div>
  );
}

export default Books;
