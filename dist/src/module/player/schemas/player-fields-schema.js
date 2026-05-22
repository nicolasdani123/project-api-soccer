import z from "zod";
import { PositionEnum, PreferredFootEnum } from "@prisma/client";
const idSchema = z.string().uuid();
const nameSchema = z.string().min(2).max(50);
const ageSchema = z
    .number()
    .int()
    .min(15, "Age must be at least 15")
    .max(45, "Age must be realistic");
const nationalitySchema = z.string().min(2).max(50);
const overallSchema = z.number().int().min(1).max(99);
const potentialSchema = z.number().int().min(1).max(99);
const heightSchema = z.number().positive().optional();
const weightSchema = z.number().positive().optional();
const preferredFootSchema = z.nativeEnum(PreferredFootEnum).optional();
const positionSchema = z.nativeEnum(PositionEnum);
const teamIdSchema = z.string().uuid();
const createdAtSchema = z.coerce.date();
const updatedAtSchema = z.coerce.date();
export { idSchema, nameSchema, ageSchema, nationalitySchema, overallSchema, potentialSchema, heightSchema, weightSchema, preferredFootSchema, positionSchema, teamIdSchema, createdAtSchema, updatedAtSchema, };
//# sourceMappingURL=player-fields-schema.js.map