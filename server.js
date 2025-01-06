const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware for JSON parsing
app.use(express.json());

// Serve static files from the root directory
app.use(express.static(__dirname));

// Example API endpoint
app.get("/api/data", (req, res) => {
  res.json({
    message: "Hello from the backend!",
    data: [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
    ],
  });
});

// Fallback route to serve frontpage.html for any unmatched route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontpage.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
