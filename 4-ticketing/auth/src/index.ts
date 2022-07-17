import express from "express";
import "express-async-errors";

import { currentUserRouter } from "./routes/currentuser";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/singup";
import { errorHandler } from "./middlewares/error-handler";
import { RouteNotFoundError } from "./errors/route-not-found-error";

const app = express();
app.use(express.json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all("*", async () => {
  throw new RouteNotFoundError();
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
