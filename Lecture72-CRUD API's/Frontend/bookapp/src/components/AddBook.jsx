import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function AddBook() {
  const [bookname, setBookName] = useState("");
  const [desc, setDesc] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bookname || !desc || !author) {
      setError("fill all details");
      return;
    }

    try {
      axios.post("http://localhost:3000/addbook", {
        title: bookname,
        description: desc,
        author,
      });
    } catch (err) {
      setError(err);
    }
    setBookName("");
    setDesc("");
    setAuthor("");
  }

  

  return (
    <form onSubmit={handleSubmit}>
      <label>Book Name</label>
      <input
        type="text"
        value={bookname}
        onChange={(e) => setBookName(e.target.value)}
        placeholder="enter Book name"
      />

      <label>Description</label>
      <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="enter Book description"
      />

      <label>Author</label>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="enter Book author name"
      />

      {error && <p>{error}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddBook;
