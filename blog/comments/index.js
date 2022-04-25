import express from "express";
import { randomBytes } from "crypto";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(express.json());
app.use(cors());

const commentsByPostId = {};

app.route("/posts/:id/comments")
    .get((req, res) => {
        res.send(commentsByPostId[req.params.id] || []);
    })
    .post(async (req, res) => {
        const commentId = randomBytes(4).toString("hex");
        const { content } = req.body;

        const comments = commentsByPostId[req.params.id] || [];

        comments.push({ id: commentId, content });

        commentsByPostId[req.params.id] = comments;

        await axios.post("http://localhost:4005/events", {
            type: "CommentCreated",
            data: {
                id: commentId,
                content,
                postId: req.params.id
            }
        })

        res.status(201).send(comments);
    });

app.route("/events")
    .post((req, res) => {
        console.log("Received Event", req.body.type);
        res.send({});
    })

app.listen(4001, () => {
    console.log("Listening on port 4001");
});