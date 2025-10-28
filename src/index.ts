import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import { json } from "body-parser";


const app: Express = express();
const PORT = process.env.PORT || 3000;


app.use(helmet());
app.use(json());


app.get("/", (req: Request, res: Response) => {
res.json({ message: "Library API is running" });
});




app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));