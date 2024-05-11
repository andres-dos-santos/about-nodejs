import { randomUUID } from "node:crypto";

import { left, right, type Either } from "../errors/either";
import { RequiredParametersError } from "../errors/required-parameters.error";

interface ProductRequest {
  barCode: string;
  price: number;
  quantity: number;
  name: string;
}

interface ProductResponse extends ProductRequest {
  id: string;
}

type Response = Either<RequiredParametersError, ProductResponse>;

export class CreateProductUseCase {
  async handle(data: ProductRequest): Promise<Response> {
    if (!data.barCode) {
      return left(new RequiredParametersError("Code not found!", 400));
    }

    return right({
      ...data,
      id: randomUUID(),
    });
  }
}
