import express from "express";
import axios from "axios";

const app = express();

app.use(express.json());

app.route("/events").post(async (req, res) => {
  const { type, data } = req.body;
  console.log("Processing event:", req.body);
  if (type === "CommentCreated") {
    const status = data.content.includes("orange") ? "rejected" : "approved";
    try {
      await axios.post("http://event-bus-clusterip-srv:4005/events", {
        type: "CommentModerated",
        data: {
          id: data.id,
          postId: data.postId,
          status,
          content: data.content,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
  res.send({});
});

app.listen(4003, () => {
  console.log("Listening on port 4003");
});
