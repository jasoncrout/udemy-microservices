import express from "express";
import { randomBytes } from "crypto";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const posts = {};

app.route("/posts")
    .get((req, res) => {
        res.send(posts)
    })
    .post((req, res) => {
        const id = randomBytes(4).toString("hex");
        const { title } = req.body;

        posts[id] = {
            id, title
        };
        res.status(201).send(posts[id]);
    });

app.listen(4000, () => {
    console.log("Listening on port 4000");
})