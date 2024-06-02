import { Hono } from "hono";
import { cors } from "hono/cors";
import { BrowserRouter } from "routes/index";

export const App = new Hono({ strict: true });
App.use(cors({ origin: "*" }));

App.route("/", BrowserRouter(App));
