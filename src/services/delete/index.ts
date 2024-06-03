import { HTTPException } from "hono/http-exception";
import { tryit } from "radash";
import { db } from "config/orm/client";
import type { HttpResponse, HttpError } from "src/interfaces/index";
import { findMany } from "services/read/findMany";

export const destroy = async (
	id: string
): Promise<HttpResponse | HttpError> => {
	const [error] = await tryit(() => db.todo.delete({ where: { id } }))();

	if (error) throw new HTTPException(404, { message: "Todo Not Found" });

	return findMany();
};
