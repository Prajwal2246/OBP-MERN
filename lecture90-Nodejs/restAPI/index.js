const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

//routes
//REST API- get post put patch delete
app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id === Number(id));
//   console.log(user)
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
