export abstract class Services {
	abstract create(resource: unknown): Promise<unknown>;
	abstract read(): Promise<unknown>;
	abstract readOne(id: string): Promise<unknown>;
	abstract update(id: string): Promise<unknown>;
	abstract delete(id: string): Promise<unknown>;
}
