import { Request, Response, NextFunction } from "express";

export const validateAuthor = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Author name required" });
  next();
};

export const validateBook = (req: Request, res: Response, next: NextFunction) => {
  const { title, authorId } = req.body;
  if (!title || !authorId) {
    return res.status(400).json({ error: "Book title and authorId are required" });
  }
  next();
};
