import z from "zod";
declare const playerCreateSchema: z.ZodObject<{
    name: z.ZodString;
    age: z.ZodNumber;
    nationality: z.ZodString;
    overall: z.ZodNumber;
    potential: z.ZodNumber;
    height: z.ZodOptional<z.ZodNumber>;
    weight: z.ZodOptional<z.ZodNumber>;
    preferredFoot: z.ZodOptional<z.ZodEnum<{
        LEFT: "LEFT";
        RIGTH: "RIGTH";
    }>>;
    position: z.ZodEnum<{
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
    teamId: z.ZodString;
}, z.z.core.$strip>;
export default playerCreateSchema;
//# sourceMappingURL=player-create-schema.d.ts.map