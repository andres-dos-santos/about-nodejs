import { Router } from "express";

import { ProductController } from "./controllers/product";

const routes = Router();

routes.post("/products", new ProductController().create);

export { routes };
