import express from "express";
import { randomBytes } from "crypto";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(express.json());
app.use(cors());

const posts = {};

app.route("/posts")
    .get((req, res) => {
        res.send(posts)
    })
    .post(async (req, res) => {
        const id = randomBytes(4).toString("hex");
        const { title } = req.body;

        posts[id] = {
            id, title
        };

        await axios.post("http://event-bus-clusterip-srv:4005/events", {
            type: "PostCreated",
            data: {
                id, title
            }
        })
        res.status(201).send(posts[id]);
    });

app.route("/events")
    .post((req, res) => {
        console.log("Received Event", req.body.type);
        res.send({});
    })

app.listen(4000, () => {
    console.log("On Docker Hub! V2");
    console.log("Listening on port 4000");
})