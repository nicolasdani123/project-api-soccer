import z from "zod";
declare const playerResponseSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    age: z.ZodNumber;
    nationality: z.ZodString;
    overall: z.ZodNumber;
    potential: z.ZodNumber;
    height: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    weight: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    preferredFoot: z.ZodNullable<z.ZodOptional<z.ZodEnum<{
        LEFT: "LEFT";
        RIGTH: "RIGTH";
    }>>>;
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
    createdAt: z.z.ZodCoercedDate<unknown>;
    updatedAt: z.z.ZodCoercedDate<unknown>;
}, z.z.core.$strip>;
export default playerResponseSchema;
//# sourceMappingURL=player-response-schema.d.ts.map