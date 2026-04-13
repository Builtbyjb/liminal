import { Hono } from "hono";
import auth from "./auth/auth";

const app = new Hono();

app.route("/api/v1/auth", auth);

export default app;
