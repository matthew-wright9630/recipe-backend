// import express from "express";
import express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello from TypeScript + Express!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});