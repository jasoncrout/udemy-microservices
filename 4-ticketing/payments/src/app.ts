import express from "express";
import "express-async-errors";
import cookieSession from "cookie-session";
import {
  errorHandler,
  RouteNotFoundError,
  currentUser,
} from "@jc-ticketing/common";
import { createChargeRouter } from "./routes/new";

const app = express();
app.set("trust proxy", true);

app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  }),
);

app.use(currentUser);

app.use(createChargeRouter);

app.all("*", async () => {
  throw new RouteNotFoundError();
});

app.use(errorHandler);

export { app };
