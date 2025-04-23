const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const messageRoutes = require("./routes/messages");

const app = express();
const PORT = 5000;

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/chatApp")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.use(cors());
app.use(bodyParser.json());

// Root route for testing
app.get("/", (req, res) => {
  res.send("Welcome to the chat app!");
});

app.use("/messages", messageRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
