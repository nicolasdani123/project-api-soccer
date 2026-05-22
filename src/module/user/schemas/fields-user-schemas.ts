import z from "zod";

const idSchema = z.string().uuid();

const nameSchema = z.string().min(1).max(50).trim();
const userNameSchema = z.string().min(1).max(50).trim();
const emailSchema = z.string().trim().email().min(1).max(50);
const passwordHashSchema = z.string().min(60).max(255);
const passwordSchema = z.string().trim().min(1).max(50);
const isActiveSchema = z.boolean();
const createdAtSchema = z.date();
const updatedAtSchema = z.date();

export { idSchema, nameSchema, userNameSchema, emailSchema, passwordSchema, passwordHashSchema, isActiveSchema, createdAtSchema, updatedAtSchema };