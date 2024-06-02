import { tryit } from "radash";
import { HTTPException } from "hono/http-exception";
import type { HttpResponse, HttpError } from "src/interfaces/index";
import { db } from "config/orm/client";

export const findOne = async (
	id: string
): Promise<HttpResponse | HttpError> => {
	const [error, todo] = await tryit(() =>
		db.todo.findUniqueOrThrow({
			where: { id }
		})
	)();

	if (error) throw new HTTPException(404, { message: "Todo Not Found" });

	return todo;
};
