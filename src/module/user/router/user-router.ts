import { Router } from "express";
import userController from "../controller/user-controller.js";
import UserRepository from "../repository/user-repository.js";
import UserService from "../service/user-services.js";
import asyncHandler from "../../../../middlewares/async-handler.js";

const userRouter = Router()

const repository = new  UserRepository()
const service = new UserService(repository)
const controller = new userController(service)

userRouter.get("/",asyncHandler(controller.findAll.bind(controller)))
userRouter.get("/:id",asyncHandler(controller.findById.bind(controller)))
userRouter.post("/",asyncHandler(controller.create.bind(controller)))
export default userRouter

