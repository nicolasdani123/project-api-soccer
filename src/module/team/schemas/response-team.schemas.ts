import z from "zod";
import { idSchema, nameSchema, shortNameSchema, countrySchema, citySchema, leagueSchema, stadiumSchema, foundedYearSchema, logoUrlSchema, isActiveSchema, createdAtSchema, updatedAtSchema } from "./fields-team.schemas.js";
const teamResponseSchema = z.object({
  id: idSchema,
  name: nameSchema,
  shortName: shortNameSchema,
  country: countrySchema,
  city: citySchema,
  league: leagueSchema,
  stadium: stadiumSchema,
  foundedYear: foundedYearSchema,
  logoUrl: logoUrlSchema,
  isActive: isActiveSchema,
  createdAt: createdAtSchema,
  updatedAt: updatedAtSchema,
});


export default teamResponseSchema