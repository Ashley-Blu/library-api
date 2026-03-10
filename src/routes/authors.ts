import express, { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { authors, books } from "../models";

const router = express.Router();

// CREATE new author
router.post("/", (req: Request, res: Response) => {
  const { name, bio, birthYear } = req.body;
  if (!name) return res.status(400).json({ error: "Author name is required" });

  const newAuthor = { id: uuidv4(), name, bio, birthYear };
  authors.push(newAuthor);
  res.status(201).json(newAuthor);
});

// READ all authors
router.get("/", (req: Request, res: Response) => {
  res.json(authors);
});

// READ author by ID
router.get("/:id", (req: Request, res: Response) => {
  const author = authors.find(a => a.id === req.params.id);
  if (!author) return res.status(404).json({ error: "Author not found" });
  res.json(author);
});

// UPDATE author
router.put("/:id", (req: Request, res: Response) => {
  const author = authors.find(a => a.id === req.params.id);
  if (!author) return res.status(404).json({ error: "Author not found" });

  const { name, bio, birthYear } = req.body;
  Object.assign(author, { name, bio, birthYear });
  res.json(author);
});

// DELETE author
router.delete("/:id", (req: Request, res: Response) => {
  const index = authors.findIndex(a => a.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "Author not found" });

  const removed = authors.splice(index, 1);
  res.json({ message: "Author deleted", author: removed[0] });
});

// GET /authors/:id/books
router.get("/:id/books", (req: Request, res: Response) => {
  const author = authors.find(a => a.id === req.params.id);
  if (!author) return res.status(404).json({ error: "Author not found" });

  const authorBooks = books.filter(b => b.authorId === author.id);
  res.json(authorBooks);
});

export default router;
