import z from "zod";
import { name,shortName,country,city,league,stadium,foundedYear,logoUrl } from "./fields-team.schemas.js";
const createTeamSchema = z.object({
  name,
  shortName,
  country,
  city,
  league,
  stadium,
  foundedYear,
  logoUrl
});


export default createTeamSchema