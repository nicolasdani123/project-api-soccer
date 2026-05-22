import { MESSAGES } from "../../../../shared/constants/messages.js";
import AppError from "../../../../shared/error/appError.js";
import playerRespository from "../repository/player-repository.js";
import playerResponseSchema from "../schemas/player-response-schema.js";
class PlayerService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async findAll() {
        const players = await this.repository.findAll();
        return playerResponseSchema.array().parse(players);
    }
    async findById(id) {
        const player = await this.repository.findById(id);
        if (!player)
            throw new AppError(MESSAGES.PLAYER.NOT_FOUND, 404);
        return playerResponseSchema.parse(player);
    }
    async create(data) {
        const { height, weight, preferredFoot } = data;
        const prismaData = {
            ...data,
            height: height ?? null,
            weight: weight ?? null,
            preferredFoot: preferredFoot ?? null
        };
        const player = await this.repository.create(prismaData);
        return playerResponseSchema.parse(player);
    }
}
export default PlayerService;
//# sourceMappingURL=player-service.js.map