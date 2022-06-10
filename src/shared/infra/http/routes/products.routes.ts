import { Router } from "express";
import listSpecificProductController from "../../../../modules/products/controller/listSpecificProductController";
import { listAllProductsController } from "../../../../modules/products/controller/listAllProductsController";
import createProductController from "../../../../modules/products/controller/createProductController";
import updateProductController from "../../../../modules/products/controller/updateProductController";

import { ensureAuthenticated } from "../../middleware/ensureAuthenticate";
import { ensureAdmin } from "@shared/infra/middleware/ensureAdmin";

const productsRoutes = Router();

productsRoutes.get(
  "/", 
  ensureAuthenticated,
  ensureAdmin,
  (req, res) => {
    listAllProductsController(req, res)
  }
);

productsRoutes.get(
  "/:id", 
  ensureAuthenticated,
  ensureAdmin,
  (req, res) => {
    listSpecificProductController(req, res)
  }
);

productsRoutes.post(
  "/add", 
  ensureAuthenticated,
  ensureAdmin,
  (req, res) => {
    createProductController(req, res)
  }
);

productsRoutes.put(
  "/update/:id", 
  ensureAuthenticated,
  ensureAdmin,
  (req, res) => {
    updateProductController(req, res)
  }
);

export { productsRoutes };
