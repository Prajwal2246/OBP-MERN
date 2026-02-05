import axios from "axios";
import { useState } from "react";
import AddBook from "./components/AddBook";
import Book from "./components/Book";
import { useEffect } from "react";

function App() {
  const [books, setbooks] = useState([]);
  const [bookid, setBookId] = useState("");
  const [book, setBook] = useState(null);
  const [error, setError] = useState("");
  const [activeBookId, setActiveBookId] = useState(null);
  const SERVER_BASE_URL = "http://localhost:3000/";

  async function getBooks() {
    const res = await axios.get(`${SERVER_BASE_URL}books`);
    setbooks(res.data);
  }

  async function getSpecificBook(id) {
    try {
      const res = await axios.get(`${SERVER_BASE_URL}book/${id}`);
      setBook(res.data);
      setError("");
    } catch (err) {
      setBook(null);
      setError("No Book Found");
    }
  }

  async function handleStatus(id) {
    try {
      await axios.put(`http://localhost:3000/book/changeStatus/${id}`, {
        status: "read",
      });
      setActiveBookId(id);
      getBooks();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`http://localhost:3000/delete/${id}`);
      getBooks();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1>CONNECTING FRONTEND AND BACKEND</h1>
      <button onClick={getBooks}>Get all books</button>

      {books.length > 0 &&
        books.map((item) => (
          <Book
            key={item.id}
            item={item}
            handleStatus={handleStatus}
            handleDelete={handleDelete}
            activeBookId={activeBookId}
          />
        ))}

      <div>
        <input
          type="number"
          placeholder="enter book number"
          value={bookid}
          onChange={(e) => setBookId(e.target.value)}
        />
        <button onClick={() => getSpecificBook(bookid)}>Get book</button>
        <div>
          {error && <p>{error}</p>}
          {book && (
            <div>
              <h3>Title: {book.title}</h3>
              <p>Description: {book.description}</p>
              <p>status: {book.status}</p>
              <p>author: {book.author}</p>
            </div>
          )}
        </div>
      </div>

      <div>
        <h3>Add book</h3>
        <AddBook />
      </div>
    </>
  );
}

export default App;
