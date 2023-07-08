import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = 3500;

app.use(cors({
  origin: "http://localhost:3000"
}));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
  // res.json({"users": ['one', 'two', 'three', 'four']});
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
