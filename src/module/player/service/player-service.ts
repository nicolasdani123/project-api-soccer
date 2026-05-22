import type { Prisma } from "@prisma/client";
import { MESSAGES } from "@/shared/constants/messages.js";
import AppError from "@/shared/error/appError.js";
import type {
  CreatePlayerDTO,
  idDTO,
  ResponsePlayerDTO,
  UpdatePlayerDTO,
} from "../dto/player-dto.js"
import playerRespository from "../repository/player-repository.js";
import playerResponseSchema from "../schemas/player-response-schema.js";

class PlayerService {
  constructor(private readonly repository: playerRespository) {}

  async findAll(): Promise<ResponsePlayerDTO[]> {
    const players = await this.repository.findAll();
    return playerResponseSchema.array().parse(players);
  }

  async findById(id: idDTO): Promise<ResponsePlayerDTO> {
    const player = await this.repository.findById(id);
    if (!player) throw new AppError(MESSAGES.PLAYER.NOT_FOUND, 404);
    return playerResponseSchema.parse(player);
  }

  async create(data: CreatePlayerDTO): Promise<ResponsePlayerDTO> {
    const player = await this.repository.create(data);
    return playerResponseSchema.parse(player);
  }

  async update(id: idDTO, data: UpdatePlayerDTO): Promise<ResponsePlayerDTO> {
    await this.repository.findById(id);

    const filteredData: Prisma.PlayerUpdateInput = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== undefined),
    );

    const player = await this.repository.update(id, filteredData);
    return playerResponseSchema.parse(player);
  }

  async deletePlayer(id: idDTO): Promise<void> {
    await this.repository.findById(id);
    await this.repository.deletePlayer(id)
  }

  async deleteSoftPlayer(id:idDTO){
    
    await this.repository.findById(id)

    await this.repository.deleteSoftPlayer(id)
  }
}

export default PlayerService;
