import { Router } from "express";
import playerRespository from "../repository/player-repository.js";
import PlayerService from "../service/player-service.js";
import PlayerController from "../controller/player-controller.js";
import asyncHandler from "../../../../middlewares/async-handler.js";
const playerRoutes = Router();
const repository = new playerRespository();
const service = new PlayerService(repository);
const controller = new PlayerController(service);
playerRoutes.get("/", asyncHandler(controller.findAll.bind(controller)));
playerRoutes.get("/:id", asyncHandler(controller.findById.bind(controller)));
playerRoutes.post("/", asyncHandler(controller.create.bind(controller)));
export default playerRoutes;
//# sourceMappingURL=player-router.js.map