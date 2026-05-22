declare const playerUpdateSchema: import("zod").ZodObject<{
    name: import("zod").ZodOptional<import("zod").ZodString>;
    age: import("zod").ZodOptional<import("zod").ZodNumber>;
    nationality: import("zod").ZodOptional<import("zod").ZodString>;
    overall: import("zod").ZodOptional<import("zod").ZodNumber>;
    potential: import("zod").ZodOptional<import("zod").ZodNumber>;
    height: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNumber>>;
    weight: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNumber>>;
    preferredFoot: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodEnum<{
        LEFT: "LEFT";
        RIGTH: "RIGTH";
    }>>>;
    position: import("zod").ZodOptional<import("zod").ZodEnum<{
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
    }>>;
    teamId: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>;
export default playerUpdateSchema;
//# sourceMappingURL=player-update-schema.d.ts.map