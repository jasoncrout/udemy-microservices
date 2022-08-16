import express from "express";
import "express-async-errors";
import cookieSession from "cookie-session";
import { errorHandler, RouteNotFoundError } from "@jc-ticketing/common";

const app = express();
app.set("trust proxy", true);

app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  }),
);

app.all("*", async () => {
  throw new RouteNotFoundError();
});

app.use(errorHandler);

export { app };
