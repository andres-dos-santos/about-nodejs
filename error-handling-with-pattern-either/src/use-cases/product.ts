import { randomUUID } from "node:crypto";
import { left, right, type Either } from "../errors/either";

interface ProductRequest {
  barCode: string;
  price: number;
  quantity: number;
  name: string;
}

interface ProductResponse extends ProductRequest {
  id: string;
}

type Response = Either<Error, ProductResponse>;

export class CreateProductUseCase {
  async handle(data: ProductRequest): Promise<Response> {
    if (!data.barCode) {
      return left(new Error("Code not found!"));
    }

    return right({
      ...data,
      id: randomUUID(),
    });
  }
}
