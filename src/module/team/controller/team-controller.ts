import { idSchema } from "../../player/schemas/player-fields-schema.js";
import createTeamSchema from "../schemas/create-team.schemas.js";
import updateTeamSchema from "../schemas/update-team.schemas.js";
import type teamService from "../service/team-service.js";
import type { Request, Response } from "express";
class teamController {
  constructor(private readonly service: teamService) {}

  async findAll(req: Request, res: Response): Promise<void> {
    const teams = await this.service.findAll();
    res.status(200).json(teams);
  }

  async findById(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const idParsed = idSchema.parse(id);
    const team = await this.service.findById(idParsed);
    res.status(200).json(team);
  }

  async create(req: Request, res: Response): Promise<void> {
    const body = req.body;

    const bodyParsed = createTeamSchema.parse(body);

    const team = await this.service.create(bodyParsed);

    res.status(201).json(team);
  }

  async update(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const body = req.body;

    const bodyParsed = updateTeamSchema.parse(body);
    const idParsed = idSchema.parse(id);

    const team = await this.service.update(idParsed, bodyParsed);
    res.status(200).json(team);
  }


  async deleteHard(req:Request,res:Response):Promise<void>{

    const id = req.params.id
    const idParsed = idSchema.parse(id)

    await this.service.hardDelete(idParsed)

    res.status(204).send()
  }

  async deactivate(req:Request,res:Response):Promise<void>{
    const id = req.params.id
    const idParsed = idSchema.parse(id)

    await this.service.deactivate(idParsed)

    res.status(204).send()
  }

}
export default teamController;
