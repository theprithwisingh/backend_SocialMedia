import express, { Request, Response } from "express";

const app = express();

app.get("/", function (req: Request, res: Response) {
  return res.json({ message: "hello world" });
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
