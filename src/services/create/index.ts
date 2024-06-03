import { tryit, uid } from "radash";
import { HTTPException } from "hono/http-exception";
import type { Todo } from "@prisma/client";
import { db } from "config/orm/client";
import type { HttpError, HttpResponse } from "src/interfaces/index";

export const create = async ({
	title,
	done,
	owner,
	avatar
}: Todo): Promise<HttpResponse | HttpError> => {
	const [error, todo] = await tryit(() =>
		db.todo.create({
			data: {
				id: uid(10),
				title,
				done,
				owner,
				avatar
			}
		})
	)();

	if (error) throw new HTTPException(409, { message: "Todo Already Exists" });

	return todo;
};
