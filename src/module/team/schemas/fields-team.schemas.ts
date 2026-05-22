import z from "zod";

const idSchema = z.string().uuid();

const nameSchema = z.string().min(1).max(50).trim();

const shortNameSchema = z.string().min(1).max(4);

const countrySchema = z.string().min(1).max(20).trim();

const citySchema = z.string().min(1).max(20);

const leagueSchema = z.string().min(1).max(20).trim();

const stadiumSchema = z.string().min(1).max(20).nullable();

const foundedYearSchema = z
  .number()
  .int()
  .min(1800)
  .max(new Date().getFullYear());
 

const logoUrlSchema = z.string().url().nullable();

const isActiveSchema = z.boolean();

const createdAtSchema = z.date();

const updatedAtSchema = z.date();

export {idSchema,nameSchema,shortNameSchema,countrySchema,citySchema,leagueSchema,stadiumSchema,foundedYearSchema,logoUrlSchema,isActiveSchema,createdAtSchema,updatedAtSchema}