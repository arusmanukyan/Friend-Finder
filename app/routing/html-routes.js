// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/questions", function(req, res) {
  res.sendFile(path.join(__dirname, "questions.html"));
});

