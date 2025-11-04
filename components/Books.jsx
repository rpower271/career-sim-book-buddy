import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import axios from "axios";
import BookCardList from "./BookCardList";

function Books() {
  const [books, setBooks] = useState([]);
  const [booksToDisplay, setBooksToDisplay] = useState([]);
  useEffect(() => {
    axios(`${import.meta.env.VITE_API_BASE_URL}/api/books`)
      .then((data) => {
        console.log(data.data);
        setBooks(data.data);
        setBooksToDisplay(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleBookSearch = (e) => {
    const searchResults = books.filter((book) =>
      book.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setBooksToDisplay(searchResults)
  };
  return (
    <div className="books-page">
      <div>
        Search for a Book: <input type="text" onChange={handleBookSearch} />
      </div>
      <BookCardList books={booksToDisplay} />
    </div>
  );
}

export default Books;
