import z from "zod";
import { idSchema } from "../../schemas/player-fields-schema.js";
import playerCreateSchema from "../../schemas/player-create-schema.js";
import playerUpdateSchema from "../../schemas/player-update-schema.js";
import playerResponseSchema from "../../schemas/player-response-schema.js";
type idDTO = z.infer<typeof idSchema>;
type CreatePlayerDTO = z.infer<typeof playerCreateSchema>;
type UpdatePlayerDTO = z.infer<typeof playerUpdateSchema>;
type ResponsePlayerDTO = z.infer<typeof playerResponseSchema>;
export type { CreatePlayerDTO, UpdatePlayerDTO, ResponsePlayerDTO, idDTO };
//# sourceMappingURL=player-dto.d.ts.map