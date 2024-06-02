import { tryit } from "radash";
import { HTTPException } from "hono/http-exception";
import type { HttpResponse, HttpError } from "src/interfaces/index";
import { db } from "config/orm/client";

type Fields = { title: string; done: boolean };

export const update = async (
	id: string,
	data: Fields
): Promise<HttpResponse | HttpError> => {
	const [error, todo] = await tryit(() =>
		db.todo.update({
			where: { id },
			data: {
				...data
			}
		})
	)();

	if (error) throw new HTTPException(404, { message: "Todo Not Found" });

	return todo;
};
