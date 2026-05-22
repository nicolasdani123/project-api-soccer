import type z from "zod";
import type teamResponseSchema from "../schemas/response-team.schemas.js";
import type createTeamSchema from "../schemas/create-team.schemas.js";
import type updateTeamSchema from "../schemas/update-team.schemas.js";


type createTeamDto = z.infer<typeof createTeamSchema>
type updateTeamDTO = z.infer<typeof updateTeamSchema>
type ResponseTeamDTO  = z.infer<typeof teamResponseSchema>

export type {createTeamDto,updateTeamDTO,ResponseTeamDTO}