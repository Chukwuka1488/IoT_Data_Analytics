import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = process.env.NODE_ENV === "test" ? 4000 : 3500; // Use environment variable

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

export { app }; // Export the app instance