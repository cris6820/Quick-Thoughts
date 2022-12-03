
const express = require('express');
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(server.urlencoded({ extended: true }));
app.use(server.json());


// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.
app.listen(PORT, function () {
    console.log("Listening on PORT: ", PORT)
})
