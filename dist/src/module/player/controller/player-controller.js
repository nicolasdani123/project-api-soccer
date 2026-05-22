import { idSchema } from "../schemas/player-fields-schema.js";
import playerCreateSchema from "../schemas/player-create-schema.js";
class PlayerController {
    service;
    constructor(service) {
        this.service = service;
    }
    async findAll(_req, res) {
        const players = await this.service.findAll();
        res.status(200).json(players);
    }
    async findById(req, res) {
        const { id } = req.params;
        const idParsed = idSchema.parse(id);
        const player = await this.service.findById(idParsed);
        res.status(200).json(player);
    }
    async create(req, res) {
        const payload = req.body;
        const data = playerCreateSchema.parse(payload);
        const player = await this.service.create(data);
        res.status(201).json(player);
    }
}
export default PlayerController;
//# sourceMappingURL=player-controller.js.map