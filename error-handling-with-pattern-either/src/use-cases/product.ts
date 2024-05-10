import { randomUUID } from "node:crypto";

interface ProductRequest {
  barCode: string;
  price: number;
  quantity: number;
  name: string;
}

interface ProductResponse extends ProductRequest {
  id: string;
}

export class CreateProductUseCase {
  async handle(data: ProductRequest): Promise<ProductResponse> {
    return {
      ...data,
      id: randomUUID(),
    };
  }
}
