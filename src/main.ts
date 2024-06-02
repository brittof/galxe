import { log } from "utils/logger";
import { App } from "./app";

Bun.serve({
	port: 3000,
	hostname: "localhost",
	fetch: App.fetch
});

console.log(log.info.message, "\n", log.info.local, "\n", log.info.repository);
