import z from "zod";
const id = z.string().uuid();
const name = z.string().min(1).max(50).trim();
const shortName = z.string().min(1).max(4).optional();
const country = z.string().min(1).max(20).trim();
const city = z.string().min(1).max(20).optional();
const league = z.string().min(1).max(20).trim();
const stadium = z.string().min(1).max(20).optional();
const foundedYear = z
    .number()
    .int()
    .min(1800)
    .max(new Date().getFullYear())
    .optional();
const logoUrl = z.string().url().optional();
const createdAt = z.coerce.date();
const updatedAt = z.coerce.date();
const createTeamSchema = z.object({
    name,
    shortName,
    country,
    city,
    league,
    stadium,
    foundedYear,
    logoUrl,
});
const updateTeamSchema = createTeamSchema.partial();
const teamResponseSchema = z.object({
    id,
    name,
    shortName,
    country,
    city,
    league,
    stadium,
    foundedYear,
    logoUrl,
    createdAt,
    updatedAt,
});
export { id, name, shortName, country, city, league, stadium, foundedYear, logoUrl, createdAt, updatedAt, createTeamSchema, updateTeamSchema, teamResponseSchema, };
//# sourceMappingURL=create-team.schemas.js.map