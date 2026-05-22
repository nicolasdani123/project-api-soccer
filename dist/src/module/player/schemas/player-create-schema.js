import { nameSchema, ageSchema, nationalitySchema, overallSchema, potentialSchema, heightSchema, weightSchema, preferredFootSchema, positionSchema, teamIdSchema, } from "../schemas/player-fields-schema.js";
import z from "zod";
const playerCreateSchema = z.object({
    name: nameSchema,
    age: ageSchema,
    nationality: nationalitySchema,
    overall: overallSchema,
    potential: potentialSchema,
    height: heightSchema,
    weight: weightSchema,
    preferredFoot: preferredFootSchema,
    position: positionSchema,
    teamId: teamIdSchema,
});
export default playerCreateSchema;
//# sourceMappingURL=player-create-schema.js.map