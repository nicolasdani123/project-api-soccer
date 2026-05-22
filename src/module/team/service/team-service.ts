import type { Prisma } from "@prisma/client";
import type { idDTO, ResponsePlayerDTO } from "../../player/dto/player-dto.js";
import type {
  createTeamDto,
  ResponseTeamDTO,
  updateTeamDTO,
} from "../dto/team-dto.js";
import type TeamRepository from "../repository/team-repository.js";
import teamResponseSchema from "../schemas/response-team.schemas.js";

class teamService {
  constructor(private readonly repository: TeamRepository) {}

  async findAll(): Promise<ResponseTeamDTO[]> {
    const teams = await this.repository.findAll();
    return teamResponseSchema.array().parse(teams);
  }

  async findById(id: idDTO): Promise<ResponseTeamDTO | null> {
    const teams = await this.repository.findById(id);

    return teamResponseSchema.parse(teams);
  }

  async create(data: createTeamDto) {
    const team = await this.repository.create(data);
    return teamResponseSchema.parse(team);
  }

  async update(id: idDTO, data: updateTeamDTO) {
    await this.repository.findById(id);

    const filteredData: Prisma.TeamUpdateInput= Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== undefined),
    );

    return await this.repository.update(id,filteredData)
  }

  async hardDelete(id:idDTO):Promise<void>{


    await this.repository.findById(id)

    await this.repository.hardDelete(id)
  }
  

  async deactivate(id:idDTO):Promise<void>{

    await this.repository.findById(id)

     await this.repository.deactivate(id)

  }
}

export default teamService;
