import express from "express";
import { randomBytes } from "crypto";
import cors from "cors";
import axios from "axios";
import { log } from "console";

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

        comments.push({ id: commentId, content, status: "pending" });

        commentsByPostId[req.params.id] = comments;

        try {
            await axios.post("http://event-bus-clusterip-srv:4005/events", {
                type: "CommentCreated",
                data: {
                    id: commentId,
                    content,
                    postId: req.params.id,
                    status: "pending"
                }
            })
        } catch (err) {
            console.log(err);
        }
        res.status(201).send(comments);
    });

app.route("/events")
    .post(async (req, res) => {
        console.log("Received Event", req.body.type);

        const { type, data } = req.body;

        if (type === "CommentModerated") {
            const { id, content, postId, status } = data;

            const comments = commentsByPostId[postId];

            const comment = comments.find(comment => {
                return comment.id === id;
            });

            comment.status = status;
            try {
                await axios.post("http://event-bus-clusterip-srv:4005/events", {
                    type: "CommentUpdated",
                    data: {
                        id,
                        status,
                        postId,
                        content
                    }
                });
            } catch (err) {
                console.log(err);
            }
        };
        res.send({});
    })

app.listen(4001, () => {
    console.log("Listening on port 4001");
});