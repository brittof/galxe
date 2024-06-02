import { tryit } from "radash";
import { db } from "config/orm/client";
import type { HttpResponse } from "src/interfaces/index";

export const findMany = async (): Promise<HttpResponse> => {
	const [_, todos] = await tryit(db.todo.findMany)();

	return todos ?? [];
};
