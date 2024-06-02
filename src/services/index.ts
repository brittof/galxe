import { uid } from "radash";
import { db } from "config/orm/client";
import type { Services } from "entities/index";

class Service implements Services {
	public async create(resource: unknown) {
		// Implement the create method here
		return { status: 201, data: null };
	}

	public async read() {
		// Implement the read method here
		return { status: 200, data: [] };
	}

	public async readOne(id: string) {
		// Implement the readOne method here
		return { status: 200, data: {} };
	}

	public async update(id: string) {
		// Implement the update method here
		return { status: 200, data: {} };
	}

	public async delete(id: string) {
		// Implement the delete method here
		return { status: 200, data: null };
	}
}

export default new Service();
