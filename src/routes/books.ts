import { Router, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { books, authors, Book } from "../models";

const router = Router();

// CREATE book
router.post("/", (req: Request, res: Response) => {
  const { title, authorId, year, isbn } = req.body;
  const author = authors.find(a => a.id === authorId);
  if (!author) return res.status(400).json({ error: "Invalid authorId" });

  const duplicate = books.find(b => b.title === title && b.authorId === authorId);
  if (duplicate) return res.status(409).json({ error: "Book already exists for this author" });

  const newBook: Book = { id: uuidv4(), title, authorId, year, isbn };
  books.push(newBook);
  res.status(201).json(newBook);
});

// READ all books
router.get("/", (req: Request, res: Response) => {
  res.json(books);
});

// READ book by ID
router.get("/:id", (req: Request, res: Response) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.status(404).json({ error: "Book not found" });
  res.json(book);
});

// UPDATE book
router.put("/:id", (req: Request, res: Response) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.status(404).json({ error: "Book not found" });

  const { title, authorId, year, isbn } = req.body;
  if (authorId && !authors.find(a => a.id === authorId)) {
    return res.status(400).json({ error: "Invalid authorId" });
  }

  Object.assign(book, { title, authorId, year, isbn });
  res.json(book);
});

// DELETE book
router.delete("/:id", (req: Request, res: Response) => {
  const index = books.findIndex(b => b.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "Book not found" });
  const removed = books.splice(index, 1);
  res.json({ message: "Book deleted", book: removed[0] });
});

export default router;
