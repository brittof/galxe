import type { Hono } from "hono";
import type { StatusCode } from "hono/utils/http-status";
import services from "services/index";

export const BrowserRouter = (Router: Hono) => {
	Router.post("/", async (context) => {
		const data = await context.req.json();
		const todo = await services.create(data);

		return context.json(todo.data, todo.status as StatusCode);
	});

	Router.get("/", async (context) => {
		const response = await services.read();

		return context.json(response.data, response.status as StatusCode);
	});

	Router.get("/:id", async (context) => {
		const id = context.req.param("id");
		const response = await services.readOne(id);

		return context.json(response.data, response.status as StatusCode);
	});

	Router.put("/:id", async (context) => {
		const id = context.req.param("id");
		const { title, done } = await context.req.json();
		const response = await services.update(id, { title, done });

		return context.json(response.data, response.status as StatusCode);
	});

	Router.delete("/:id", async (context) => {
		const id = context.req.param("id");
		const response = await services.delete(id);

		return context.json(response.data, response.status as StatusCode);
	});

	return Router;
};
