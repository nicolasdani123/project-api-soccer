import z from "zod";
declare const idSchema: z.ZodString;
declare const nameSchema: z.ZodString;
declare const ageSchema: z.ZodNumber;
declare const nationalitySchema: z.ZodString;
declare const overallSchema: z.ZodNumber;
declare const potentialSchema: z.ZodNumber;
declare const heightSchema: z.ZodOptional<z.ZodNumber>;
declare const weightSchema: z.ZodOptional<z.ZodNumber>;
declare const preferredFootSchema: z.ZodOptional<z.ZodEnum<{
    LEFT: "LEFT";
    RIGTH: "RIGTH";
}>>;
declare const positionSchema: z.ZodEnum<{
    GK: "GK";
    CB: "CB";
    LB: "LB";
    RB: "RB";
    CDM: "CDM";
    CM: "CM";
    CAM: "CAM";
    LW: "LW";
    RW: "RW";
    ST: "ST";
}>;
declare const teamIdSchema: z.ZodString;
declare const createdAtSchema: z.z.ZodCoercedDate<unknown>;
declare const updatedAtSchema: z.z.ZodCoercedDate<unknown>;
export { idSchema, nameSchema, ageSchema, nationalitySchema, overallSchema, potentialSchema, heightSchema, weightSchema, preferredFootSchema, positionSchema, teamIdSchema, createdAtSchema, updatedAtSchema, };
//# sourceMappingURL=player-fields-schema.d.ts.map