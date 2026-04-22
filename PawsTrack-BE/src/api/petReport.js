import express from "express";
import {
  getAllPetReports,
  getPetReportById,
  updatePetReport,
  createPetReport,
  deletePetReport
} from "../application/petReport.js";

const petReportRouter = express.Router();

petReportRouter.route("/").get(getAllPetReports).post(createPetReport);
petReportRouter
  .route("/:id")
  .get(getPetReportById)
  .put(updatePetReport)
  .delete(deletePetReport);

export default petReportRouter;
