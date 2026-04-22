import express from "express";
import {
  createNotification,
  getAllNotifications,
  getNotificationById,
  deleteNotification,
  updateNotification
} from "../application/notification.js";

const notificationRouter = express.Router();

notificationRouter.route("/").post(createNotification).get(getAllNotifications);
notificationRouter
  .route("/:id")
  .get(getNotificationById)
  .put(updateNotification)
  .delete(deleteNotification);


export default notificationRouter;
