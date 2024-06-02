import type { Todo } from "@prisma/client";

export interface Response {
	status: number;
	data?: Todo[] | Todo | { error: string };
}

export abstract class Services {
	abstract create(resource: unknown): Promise<Response>;
	abstract read(): Promise<Response>;
	abstract readOne(id: string): Promise<Response>;
	abstract update(id: string, resource: unknown): Promise<Response>;
	abstract delete(id: string): Promise<Response>;
}
