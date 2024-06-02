import type { Hono } from "hono";
import * as services from "services/index";

export const BrowserRouter = (Router: Hono) => {
	Router.post("/", async (context) => {
		const data = await context.req.json();
		const response = await services.create(data);

		return context.json(response);
	});

	Router.get("/", async (context) => {
		const response = await services.findMany();

		return context.json(response, 200);
	});

	Router.get("/:id", async (context) => {
		const id = context.req.param("id");
		const response = await services.findOne(id);

		return context.json(response);
	});

	Router.put("/:id", async (context) => {
		const id = context.req.param("id");
		const { title, done } = await context.req.json();
		const response = await services.update(id, { title, done });

		return context.json(response);
	});

	Router.delete("/:id", async (context) => {
		const id = context.req.param("id");
		const response = await services.destroy(id);

		return context.json(response);
	});

	return Router;
};
