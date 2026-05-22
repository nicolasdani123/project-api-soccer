import { idSchema } from "../schemas/player-fields-schema.js";
import type PlayerService from "../service/player-service.js";
import type { Request, Response } from "express";
import playerCreateSchema from "../schemas/player-create-schema.js";
import playerUpdateSchema from "../schemas/player-update-schema.js";

class PlayerController {
  constructor(private readonly service: PlayerService) {}

  async findAll(_req: Request, res: Response): Promise<void> {
    const players = await this.service.findAll();

    res.status(200).json(players);
  }

  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    const idParsed = idSchema.parse(id);

    const player = await this.service.findById(idParsed);

    res.status(200).json(player);
  }

  async create(req: Request, res: Response): Promise<void> {
    const payload = req.body;

    const data = playerCreateSchema.parse(payload);

    const player = await this.service.create(data);

    res.status(201).json(player);
  }

  async update(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const body = req.body;

    const idParsed = idSchema.parse(id);
    const bodyParsed = playerUpdateSchema.parse(body);

    const player = await this.service.update(idParsed, bodyParsed);

    res.status(200).json(player);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const id = req.params.id;

    const idParsed = idSchema.parse(id);

    await this.service.deletePlayer(idParsed);
    res.status(204).send()
  }

  async deactivate(req:Request,res:Response):Promise<void>{

    const id = req.params.id
    const idParsed = idSchema.parse(id)

    await this.service.deleteSoftPlayer(idParsed)
    res.status(204).send()
  }
}

export default PlayerController;
