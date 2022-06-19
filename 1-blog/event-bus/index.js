import express from "express";
import axios from "axios";

const app = express();

app.use(express.json());

const events = [];

app.route("/events")
    .post(async (req, res) => {
        const event = req.body;
        events.push(event);
        await axios.post("http://posts-clusterip-srv:4000/events", event).catch((err) => {
            console.log(err.message);
        });
        await axios.post("http://comments-clusterip-srv:4001/events", event).catch((err) => {
            console.log(err.message);
        });
        await axios.post("http://query-clusterip-srv:4002/events", event).catch((err) => {
            console.log(err.message);
        });
        await axios.post("http://moderation-clusterip-srv:4003/events", event).catch((err) => {
            console.log(err.message);
        });
        res.send({ status: "OK" });
    })
    .get((req, res) => {
        res.send(events);
    })

app.listen(4005, () => {
    console.log("Listening on port 4005");
})