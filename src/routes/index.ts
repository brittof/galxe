import { isEmpty } from "radash";
import type { Hono } from "hono";
import services from "services/index";

export const BrowserRouter = (Router: Hono) => {
	Router.post("/", async (context) => {
		const data = await context.req.json();
		const response = await services.create(data);

		if (response.status !== 201)
			return context.json({ error: "Failed to create resource" }, 500);

		return context.body(response.data, 201);
	});

	Router.get("/", async (context) => {
		const response = await services.read();

		if (isEmpty(response.data))
			return context.json({ message: "No resources registered" }, 200);

		return context.json(response.data, 200);
	});

	Router.get("/:id", async (context) => {
		const id = context.req.param("id");

		const response = await services.readOne(id);

		if (isEmpty(response.data))
			return context.json({ error: "Resource not found" }, 404);

		return context.json(response.data, 200);
	});

	Router.put("/:id", async (context) => {
		const id = context.req.param("id");
		const response = await services.update(id);

		if (isEmpty(response.data))
			return context.json({ error: "Resource not found" }, 200);

		return context.json(response.data, 200);
	});

	Router.delete("/:id", async (context) => {
		const id = context.req.param("id");
		const response = await services.delete(id);

		if (response.status !== 200) {
			return context.json({ error: "Failed to delete resource" }, 500);
		}

		return context.body(response.data, 200);
	});

	return Router;
};
