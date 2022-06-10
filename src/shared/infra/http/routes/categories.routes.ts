import { Router } from "express";
import { listAllCategoriesController } from "../../../../modules/categories/controller/listAllCategoriesController";
import listSpecificCategoryController from "../../../../modules/categories/controller/listSpecificCategoryController";
import createCategoryController from "../../../../modules/categories/controller/createCategoryController";
import updateCategoryController from "../../../../modules/categories/controller/updateCategoryController";
import deleteCategoryController from "../../../../modules/categories/controller/deleteCategoryController";

import { ensureAuthenticated } from "../../middleware/ensureAuthenticate";

const categoriesRoutes = Router();

categoriesRoutes.get(
  "/", 
  ensureAuthenticated,
  (req, res) => {
    listAllCategoriesController(req, res)
  }
);

categoriesRoutes.get(
  "/:id", 
  ensureAuthenticated,
  (req, res) => {
      listSpecificCategoryController(req, res)
  }
);

categoriesRoutes.post(
  "/add", 
  ensureAuthenticated,
  (req, res) => {
      createCategoryController(req, res)
  }
);

categoriesRoutes.put(
  "/update/:id", 
  ensureAuthenticated,
  (req, res) => {
      updateCategoryController(req, res)
  }
);

categoriesRoutes.delete(
  "/delete/:id", 
  ensureAuthenticated,
  (req, res) => {
      deleteCategoryController(req, res)
  }
);

export { categoriesRoutes };
