import axios from "axios";
import { useEffect } from "react";

function Book({ item,handleStatus,handleDelete }) {
  
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
        <button onClick={()=>handleDelete(item.id)}>Delete</button>
      </li>
    </div>
  );
}

export default Book;
