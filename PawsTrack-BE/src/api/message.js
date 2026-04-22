import express from "express";
import { 
    createMessage, 
    getAllMessages,
    getMessagesByUserId , 
    deleteMessage,
    updateMessage } from "../application/message.js";

const messageRouter = express.Router();

messageRouter.route("/").get(getAllMessages).post(createMessage);
messageRouter
    .route("/:id")
    .get(getMessagesByUserId)
    .put(updateMessage)
    .delete(deleteMessage);

export default messageRouter;