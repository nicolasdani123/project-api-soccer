import { Router } from "express";
import TeamController from "../controller/team-controller.js";
import TeamRepository from "../repository/team-repository.js";
import teamService from "../service/team-service.js";
import asyncHandler from "@/middlewares/async-handler.js";

const teamsRouter = Router()
const repository = new TeamRepository()
const service = new teamService(repository)
const controller = new TeamController(service)

teamsRouter.get("/",asyncHandler(controller.findAll.bind(controller)))
teamsRouter.get("/:id",asyncHandler(controller.findById.bind(controller)))
teamsRouter.patch("/:id",asyncHandler(controller.update.bind(controller)))
teamsRouter.post("/",asyncHandler(controller.create.bind(controller)))
teamsRouter.delete("/:id",asyncHandler(controller.deleteHard.bind(controller)))
teamsRouter.delete("/:id/deactivate",asyncHandler(controller.deactivate.bind(controller)))


export default teamsRouter