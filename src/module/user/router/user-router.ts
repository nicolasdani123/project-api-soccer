import { Router } from "express";
import UserController from "../controller/user-controller.js";
import UserRepository from "../repository/user-repository.js";
import UserService from "../service/user-services.js";
import asyncHandler from "@/middlewares/async-handler.js";

const userRouter = Router()

const repository = new  UserRepository()
const service = new UserService(repository)
const controller = new UserController(service)

userRouter.get("/",asyncHandler(controller.findAll.bind(controller)))
userRouter.get("/email",asyncHandler(controller.findByEmail.bind(controller)))
userRouter.get("/:id",asyncHandler(controller.findById.bind(controller)))
userRouter.post("/",asyncHandler(controller.create.bind(controller)))
userRouter.patch("/:id",asyncHandler(controller.update.bind(controller)))
userRouter.delete("/:id",asyncHandler(controller.delete.bind(controller)))
userRouter.patch("/:id/deactivate",asyncHandler(controller.deactivate.bind(controller)))
export default userRouter

