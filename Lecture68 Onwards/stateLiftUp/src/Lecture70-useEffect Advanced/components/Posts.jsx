import React, { useEffect, useState } from "react";
import axios from "axios";

function Posts() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

//   if (loading) return <span>Loading Data...</span>;

  useEffect(() => {
    async function showPosts() {
      try {
        setLoading(true);
        const res = await axios.get("https://dummyjson.com/posts");
        console.log(res.data.posts);
        setPost(res.data.posts);
        setLoading(false);
      } catch (error) {
        console.log(err);
        setLoading(false);
      }
    }
    showPosts();
  }, []);
  return (
    <div>
      <button>Load Posts</button>

      {post.length &&
        post.map((post, idx) => (
          <div key={idx}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
}

export default Posts;
