import prisma from "../../../core/database/prisma/client.js";
import type { idDTO } from "../../player/dto/player-dto.js";
import type {
  createTeamDto,
  ResponseTeamDTO,
  updateTeamDTO,
} from "../dto/team-dto.js";
import teamSelect from "../select/team-select.js";
import BaseRepository from "../../player/repository/base-repository.js";
import { Prisma } from "@prisma/client";

class TeamRepository extends BaseRepository<ResponseTeamDTO, typeof teamSelect> {
  async findAll(): Promise<ResponseTeamDTO[]> {
    return this.read(prisma.team, teamSelect);
  }

  async findById(id: idDTO): Promise<ResponseTeamDTO | null> {
    return this.readForId(prisma.team, id, teamSelect);
  }

  async create(data: Prisma.TeamCreateInput) {
    return await prisma.team.create({
      data,
      select: teamSelect,
    });
  }

  async update(
    id: idDTO,
    data: Prisma.TeamUpdateInput,
  ): Promise<ResponseTeamDTO> {
    return await prisma.team.update({
      where: { id },
      data,
    });
  }

  async hardDelete(id: idDTO): Promise<void> {
    await this.delete(prisma.team, id);
  }

  async deactivate(id: idDTO): Promise<void> {
    await this.softDelete(prisma.team, id);
  }
}

export default TeamRepository;
