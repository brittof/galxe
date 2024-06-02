import chalk from "chalk";

interface Logger {
	info: {
		message: string;
		local: string;
		repository: string;
	};
}

export const log = {
	info: {
		message: "Server started successfully 🐝",
		local:
			chalk.hex("#11b6e3").bold("Local: ") +
			chalk.underline("http://localhost:3000"),
		repository:
			chalk.hex("#0ba95a").bold("Repository: ") +
			chalk.underline("https://github.com/username/repo")
	}
} satisfies Logger;
