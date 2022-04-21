import express from "express";
import { randomBytes } from "crypto";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const commentsByPostId = {};

app.route("/posts/:id/comments")
    .get((req, res) => {
        res.send(commentsByPostId[req.params.id] || []);
    })
    .post((req, res) => {
        const commentId = randomBytes(4).toString("hex");
        const { content } = req.body;

        const comments = commentsByPostId[req.params.id] || [];

        comments.push({ id: commentId, content});

        commentsByPostId[req.params.id] = comments;

        res.status(201).send(comments);
    });

app.listen(4001, () => {
    console.log("Listening on port 4001");
});