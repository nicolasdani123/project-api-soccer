import type { Prisma } from "@prisma/client";
import prisma from "../../../core/database/prisma/client.js";
import playerSelect from "../select/player-select.js";
import type { ResponsePlayerDTO } from "../dto/player-dto.js";
import type { idDTO } from "../dto/player-dto.js";
import BaseRepository from "./base-repository.js";

class playerRespository extends BaseRepository<ResponsePlayerDTO, typeof playerSelect> {
async findAll(): Promise<ResponsePlayerDTO[]> {
  return this.read(prisma.player, playerSelect);
}
  async findById(id: idDTO): Promise<ResponsePlayerDTO | null> {
    return this.readForId(prisma.player, id, playerSelect);
  }
  async create(data: Prisma.PlayerCreateInput): Promise<ResponsePlayerDTO> {
    return prisma.player.create({
      data,
      select: playerSelect,
    });
  }
  async update(id: idDTO, data: Prisma.PlayerUpdateInput): Promise<ResponsePlayerDTO> {
    return prisma.player.update({
      where: { id },
      data,
      select: playerSelect,
    });
  }

  async deletePlayer(id: idDTO): Promise<void> {
    await this.delete(prisma.player, id);
  }

  async deleteSoftPlayer(id: idDTO): Promise<void> {
    await this.softDelete(prisma.player, id);
  }
}

export default playerRespository;
