import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import { json } from "body-parser";
import authorsRouter from "./routes/authors";
import booksRouter from "./routes/books";
import { loggerMiddleware } from "./middleware/logger";
import { errorHandler } from "./middleware/errorHandler";

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(json());
app.use(loggerMiddleware);

app.use("/authors", authorsRouter);
app.use("/books", booksRouter);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Library API is running" });
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
