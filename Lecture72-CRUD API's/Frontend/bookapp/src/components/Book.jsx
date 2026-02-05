import axios from "axios";
import { useEffect, useState } from "react";

function Book({ item, handleStatus, handleDelete, activeBookId }) {
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  async function handleView(id) {
    if (!email) {
      alert("enter email");
      return;
    }

    try {
      const users = await axios.patch(`http://localhost:3000/users/${id}`, {
        email,
      });
      setUsers(users.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <li key={item.id}>
        <h3>Title: {item.title}</h3>
        <div>
          <p>Description: {item.description}</p>
          <p>Status: {item.status}</p>
          <p>Author: {item.author}</p>
        </div>
        <button onClick={() => handleStatus(item.id)}>view book</button>
        <button onClick={() => handleDelete(item.id)}>Delete</button>

        {activeBookId === item.id && (
          <div>
            <input
              placeholder="enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={() => handleView(item.id)}>View</button>
          </div>
        )}

        {users && users.map((reader) => <div> {reader}</div>)}
      </li>
    </div>
  );
}

export default Book;
