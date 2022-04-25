import express from "express";
import axios from "axios";

const app = express();

app.use(express.json());

app.route("/events")
    .post( async (req, res) => {
        const event = req.body;
        try {
            await axios.post("http://localhost:4000/events", event);
            await axios.post("http://localhost:4001/events", event);
            await axios.post("http://localhost:4002/events", event);
        } catch (err) {
            console.log(err);
        }
        res.send({ status: "OK" });
    });

app.listen(4005, () => {
    console.log("Listening on port 4005");
})