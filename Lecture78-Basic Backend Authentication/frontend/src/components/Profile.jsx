import React, { useEffect, useState } from "react";

function Profile() {
  const SERVER_API = "http://localhost:3000/";
  const token = localStorage.getItem("token");
  const [user, setUser] = useState("");

  useEffect(() => {
    const res = fetch(`${SERVER_API}profile`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
      .then((data) => data.json())
      .then((user) => {console.log(user)
        setUser(user.user.email)
      });
  }, []);

  return (
    <div>
      <h2>Hello {user} </h2>
    </div>
  );
}

export default Profile;
