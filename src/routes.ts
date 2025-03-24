/** @format */

// src/routes.ts

import express from "express";
import { candidatesController } from "./controllers/candidates-controllers";
import { companiesController } from "./controllers/companies-controllers";

const router = express.Router();

router.get("/candidates", candidatesController.index);
router.get("/candidates/:id", candidatesController.show);
router.post("/candidates", candidatesController.save);
router.put("/candidates/:id", candidatesController.update);
router.delete("/candidates/:id", candidatesController.delete);

router.get("/companies", companiesController.index);
router.post("/companies", companiesController.save);
router.get("/companies/:id", companiesController.show);
router.put("/companies/:id", companiesController.update);
router.delete("/companies/:id", companiesController.delete);

export { router };
