import z from "zod";
import { id,name,shortName,country,city,league,stadium,foundedYear,logoUrl,isActive,createdAt,updatedAt } from "./fields-team.schemas.js";
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
  isActive,
  createdAt,
  updatedAt,
});


export default teamResponseSchema