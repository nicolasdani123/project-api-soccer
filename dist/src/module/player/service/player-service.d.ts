import type { CreatePlayerDTO, idDTO, ResponsePlayerDTO } from "../controller/dto/player-dto.js";
import playerRespository from "../repository/player-repository.js";
declare class PlayerService {
    private readonly repository;
    constructor(repository: playerRespository);
    findAll(): Promise<ResponsePlayerDTO[]>;
    findById(id: idDTO): Promise<ResponsePlayerDTO>;
    create(data: CreatePlayerDTO): Promise<ResponsePlayerDTO>;
}
export default PlayerService;
//# sourceMappingURL=player-service.d.ts.map