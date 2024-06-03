import type { Todo } from "@prisma/client";

export type HttpError = { message: string };
export type HttpResponse = Todo | Todo[];
