import { ProductRepository } from "./ports/product-repository";
import { UseCase } from "../ports/use-case";

export class FindOne implements UseCase {

	private repo: ProductRepository;

	constructor(repo: ProductRepository) {
		this.repo = repo;
	}

	async perform(id: number): Promise<any> {
		return this.repo.findOne(id)
	}
}