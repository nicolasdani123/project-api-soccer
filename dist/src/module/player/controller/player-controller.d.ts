import type PlayerService from "../service/player-service.js";
import type { Request, Response } from "express";
declare class PlayerController {
    private readonly service;
    constructor(service: PlayerService);
    findAll(_req: Request, res: Response): Promise<void>;
    findById(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
}
export default PlayerController;
//# sourceMappingURL=player-controller.d.ts.map