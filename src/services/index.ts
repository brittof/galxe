import type { Todo } from "@prisma/client";
import { uid, isEmpty } from "radash";
import { db } from "config/orm/client";
import type { Services, Response } from "entities/index";

class Service implements Services {
	public async create({
		title,
		done,
		owner,
		avatar
	}: Todo): Promise<Response> {
		try {
			await db.todo.create({
				data: {
					id: uid(10),
					title,
					done,
					owner,
					avatar
				}
			});

			return { status: 201 };
		} catch (error) {
			return { status: 409, data: { error: "Todo already exists" } };
		}
	}

	public async read(): Promise<Response> {
		try {
			const todos = await db.todo.findMany();

			if (isEmpty(todos)) return { status: 204 };

			return { status: 200, data: todos };
		} catch (error) {
			return { status: 500, data: { error: "Internal server error" } };
		}
	}

	public async readOne(id: string): Promise<Response> {
		try {
			const todo = await db.todo.findUnique({
				where: { id }
			});

			if (isEmpty(todo)) {
				return { status: 404, data: { error: "Todo not found" } };
			}

			return { status: 200, data: todo as Todo };
		} catch (error) {
			return { status: 500, data: { error: "Internal server error" } };
		}
	}

	public async update(
		id: string,
		data: { title: string; done: boolean }
	): Promise<Response> {
		try {
			const todo = await db.todo.update({
				where: { id },
				data: {
					...data
				}
			});

			return { status: 200, data: todo };
		} catch (error) {
			return { status: 404, data: { error: "Todo not found" } };
		}
	}

	public async delete(id: string): Promise<Response> {
		try {
			await db.todo.delete({
				where: { id }
			});

			return { status: 200 };
		} catch (error) {
			return { status: 404, data: { error: "Todo not found" } };
		}
	}
}

export default new Service();
