import type { Prisma } from "@prisma/client";
import type { ResponsePlayerDTO } from "../controller/dto/player-dto.js";
import type { idDTO } from "../controller/dto/player-dto.js";
declare class playerRespository {
    findAll(): Promise<ResponsePlayerDTO[]>;
    findById(id: idDTO): Promise<ResponsePlayerDTO | null>;
    create(data: Prisma.PlayerCreateInput): Promise<ResponsePlayerDTO>;
}
export default playerRespository;
//# sourceMappingURL=player-repository.d.ts.map