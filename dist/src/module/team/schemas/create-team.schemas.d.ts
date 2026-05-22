import z from "zod";
declare const id: z.ZodString;
declare const name: z.ZodString;
declare const shortName: z.ZodOptional<z.ZodString>;
declare const country: z.ZodString;
declare const city: z.ZodOptional<z.ZodString>;
declare const league: z.ZodString;
declare const stadium: z.ZodOptional<z.ZodString>;
declare const foundedYear: z.ZodOptional<z.ZodNumber>;
declare const logoUrl: z.ZodOptional<z.ZodString>;
declare const createdAt: z.z.ZodCoercedDate<unknown>;
declare const updatedAt: z.z.ZodCoercedDate<unknown>;
declare const createTeamSchema: z.ZodObject<{
    name: z.ZodString;
    shortName: z.ZodOptional<z.ZodString>;
    country: z.ZodString;
    city: z.ZodOptional<z.ZodString>;
    league: z.ZodString;
    stadium: z.ZodOptional<z.ZodString>;
    foundedYear: z.ZodOptional<z.ZodNumber>;
    logoUrl: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
declare const updateTeamSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    shortName: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    country: z.ZodOptional<z.ZodString>;
    city: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    league: z.ZodOptional<z.ZodString>;
    stadium: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    foundedYear: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    logoUrl: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, z.z.core.$strip>;
declare const teamResponseSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    shortName: z.ZodOptional<z.ZodString>;
    country: z.ZodString;
    city: z.ZodOptional<z.ZodString>;
    league: z.ZodString;
    stadium: z.ZodOptional<z.ZodString>;
    foundedYear: z.ZodOptional<z.ZodNumber>;
    logoUrl: z.ZodOptional<z.ZodString>;
    createdAt: z.z.ZodCoercedDate<unknown>;
    updatedAt: z.z.ZodCoercedDate<unknown>;
}, z.z.core.$strip>;
export { id, name, shortName, country, city, league, stadium, foundedYear, logoUrl, createdAt, updatedAt, createTeamSchema, updateTeamSchema, teamResponseSchema, };
//# sourceMappingURL=create-team.schemas.d.ts.map