import z from "zod";
import { id,name,userName,email,createdAt,updatedAt, password_hash } from "./fields-user-schemas.js";

const isActive = z.boolean();

const responseUserSchemas = z.object({
    id,
    name,
    userName,
    email,
    password_hash,
    isActive,
    createdAt,
    updatedAt
})

export default responseUserSchemas