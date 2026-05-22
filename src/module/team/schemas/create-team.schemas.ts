import z from "zod";
import { nameSchema, shortNameSchema, countrySchema, citySchema, leagueSchema, stadiumSchema, foundedYearSchema, logoUrlSchema } from "./fields-team.schemas.js";
const createTeamSchema = z.object({
  name: nameSchema,
  shortName: shortNameSchema,
  country: countrySchema,
  city: citySchema,
  league: leagueSchema,
  stadium: stadiumSchema,
  foundedYear: foundedYearSchema,
  logoUrl: logoUrlSchema
});


export default createTeamSchema