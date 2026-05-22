import z from "zod";

const id = z.string().uuid();

const name =z.string().min(1).max(50).trim()
const userName = z.string().min(1).max(50).trim()
const email = z.string().trim().email().min(1).max(50)
const password_hash = z.string().min(60).max(255)
const password = z.string().trim().min(1).max(50)
const isActive = z.boolean()
const createdAt = z.date()
const updatedAt = z.date()

export {id,name,userName,email,password,password_hash,isActive,createdAt,updatedAt}