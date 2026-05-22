import z from "zod";

const id = z.string().uuid();

const name = z.string().min(1).max(50).trim();

const shortName = z.string().min(1).max(4)

const country = z.string().min(1).max(20).trim();

const city = z.string().min(1).max(20)

const league = z.string().min(1).max(20).trim();

const stadium = z.string().min(1).max(20).nullable()

const foundedYear = z
  .number()
  .int()
  .min(1800)
  .max(new Date().getFullYear())
 

const logoUrl = z.string().url().nullable()

const isActive = z.boolean()

const createdAt = z.date();

const updatedAt = z.date()

export {id,name,shortName,country,city,league,stadium,foundedYear,logoUrl,isActive,createdAt,updatedAt}