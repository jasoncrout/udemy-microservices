import express from "express";

const app = express();
app.use(express.json());

app.route("/api/users/currentuser").get((req, res) => {
  res.send("Hi there!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
