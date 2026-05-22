import { idSchema } from "../../player/schemas/player-fields-schema.js";
import createTeamSchema from "../schemas/create-team.schemas.js";
import updateTeamSchema from "../schemas/update-team.schemas.js";
import type teamService from "../service/team-service.js";
import type { Request, Response } from "express";
import { MESSAGES } from "@/shared/constants/messages.js";
import { buildSuccessResponse } from "@/shared/utils/response.js";
class TeamController {
  constructor(private readonly service: teamService) {}

  async findAll(req: Request, res: Response): Promise<void> {
    const teams = await this.service.findAll();
    res.status(200).json(
      buildSuccessResponse({
        data: teams,
        message: MESSAGES.TEAM.LISTED,
      }),
    );
  }

  async findById(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const idParsed = idSchema.parse(id);
    const team = await this.service.findById(idParsed);
    res.status(200).json(
      buildSuccessResponse({
        data: team,
        message: MESSAGES.TEAM.FOUND,
      }),
    );
  }

  async create(req: Request, res: Response): Promise<void> {
    const body = req.body;

    const bodyParsed = createTeamSchema.parse(body);

    const team = await this.service.create(bodyParsed);

    res.status(201).json(
      buildSuccessResponse({
        data: team,
        message: MESSAGES.TEAM.CREATED,
        code: 201,
      }),
    );
  }

  async update(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const body = req.body;

    const bodyParsed = updateTeamSchema.parse(body);
    const idParsed = idSchema.parse(id);

    const team = await this.service.update(idParsed, bodyParsed);
    res.status(200).json(
      buildSuccessResponse({
        data: team,
        message: MESSAGES.TEAM.UPDATED,
      }),
    );
  }

  async deleteHard(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const idParsed = idSchema.parse(id);

    await this.service.hardDelete(idParsed);

    res.status(204).send();
  }

  async deactivate(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const idParsed = idSchema.parse(id);

    await this.service.deactivate(idParsed);

    res.status(204).send();
  }
}
export default TeamController;
