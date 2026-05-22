import { idSchema, nameSchema, ageSchema, nationalitySchema, overallSchema, potentialSchema, heightSchema, weightSchema, preferredFootSchema, positionSchema, teamIdSchema, createdAtSchema, updatedAtSchema, } from "./player-fields-schema.js";
import z from "zod";
const playerResponseSchema = z.object({
    id: idSchema,
    name: nameSchema,
    age: ageSchema,
    nationality: nationalitySchema,
    overall: overallSchema,
    potential: potentialSchema,
    height: heightSchema.nullable(),
    weight: weightSchema.nullable(),
    preferredFoot: preferredFootSchema.nullable(),
    position: positionSchema,
    teamId: teamIdSchema,
    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema,
});
export default playerResponseSchema;
//# sourceMappingURL=player-response-schema.js.map