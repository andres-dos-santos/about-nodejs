import type { Request, Response } from "express";

import { CreateProductUseCase } from "../use-cases/product";

export class ProductController {
  async create(request: Request, response: Response) {
    const { body } = request;

    const createProductUseCase = new CreateProductUseCase();

    const result = await createProductUseCase.handle(body);

    return response.json(result);
  }
}
