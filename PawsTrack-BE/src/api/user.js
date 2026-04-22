import express from "express";
import { 
    createUser, 
    getAllUsers, 
    getUserById, 
    updateUser, 
    deleteUser } from "../application/user.js";

const usersRouter = express.Router();


usersRouter.route("/").get(getAllUsers).post(createUser);
usersRouter
    .route("/:id")
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

export default usersRouter;