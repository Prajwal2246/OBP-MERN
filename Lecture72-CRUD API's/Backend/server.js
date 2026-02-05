import express from "express";
import cors from "cors";

const app = express(); //app is instance of express

const PORT = 3000;
app.use(cors());
app.use(express.json());

let books = [
  {
    id: 1,
    title: "Zero to One",
    description: "A perfect book for starting a business",
    status: "un-read",
    author: "Rahul Gandhi",
  },
  {
    id: 2,
    title: "Atomic Habits",
    description:
      "A practical guide to building good habits and breaking bad ones",
    status: "un-read",
    author: "James Clear",
  },
  {
    id: 3,
    title: "The Lean Startup",
    description: "How to build successful startups using continuous innovation",
    status: "un-read",
    author: "Eric Ries",
  },
  {
    id: 4,
    title: "Rich Dad Poor Dad",
    description: "Lessons about money, investing, and financial independence",
    status: "un-read",
    author: "Robert Kiyosaki",
  },
  {
    id: 5,
    title: "Think and Grow Rich",
    description: "A classic book on mindset, success, and wealth creation",
    status: "un-read",
    author: "Napoleon Hill",
  },
  {
    id: 6,
    title: "Deep Work",
    description: "Rules for focused success in a distracted world",
    status: "un-read",
    author: "Cal Newport",
  },
  {
    id: 7,
    title: "The Psychology of Money",
    description: "Timeless lessons on wealth, greed, and happiness",
    status: "un-read",
    author: "Morgan Housel",
  },
  {
    id: 8,
    title: "Start With Why",
    description: "How great leaders inspire everyone to take action",
    status: "un-read",
    author: "Simon Sinek",
  },
  {
    id: 9,
    title: "The 7 Habits of Highly Effective People",
    description: "Powerful lessons in personal and professional effectiveness",
    status: "un-read",
    author: "Stephen R. Covey",
  },
  {
    id: 10,
    title: "Hooked",
    description: "How to build habit-forming products",
    status: "un-read",
    author: "Nir Eyal",
  },
];

app.get("/health", (req, res) => {
  res.send({ status: "healthy" });
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

/* get */
app.get("/book/:id", (req, res) => {
  const id = Number(req.params.id);

  const book = books.find((book) => book.id == id);
  if (!book) {
    return res.status(400).json({ message: "No Book Found" });
  }
  res.status(200).json(book);
});

/* post */
app.post("/addbook", (req, res) => {
  const { title, description, author } = req.body;

  const lastBookId = books[books.length - 1].id;

  const newBook = {
    id: Number(lastBookId + 1),
    title,
    description,
    author,
    status: "un-read",
  };

  books.push(newBook);
  res.status(201).json({
    message: "book added succesfully",
  });
});

/* put */
app.put("/book/changeStatus/:id", (req, res) => {
  const status = req.body.status;
  const id = req.params.id;
  const book = books.find((book) => book.id == id);
  book.status = status;
  res.send(200).json({ message: "updated status successfully.." });
});

/* delete */
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const bookInd = books.find((book) => book.id == id);
  books.splice(bookInd, 1);

  res.status(200).json({ message: "deleted..." });
});

app.patch("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const {email} = req.body;

  const book = books.find((book) => book.id === id);

  if (!book) {
    return res.status(404).json({ message: "Not found" });
  }

  if (!Array.isArray(book.users)) {
    book.users = [];
  }

  const emailExist = book.users.includes(email);
  if (emailExist) {
    return res.status(400).json({ message: "email exist" });
  }

  book.users.push(email);
  res.status(200).json(book.users);
});

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
