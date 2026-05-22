import z from "zod";
import { idSchema, nameSchema, userNameSchema, emailSchema, createdAtSchema, updatedAtSchema } from "./fields-user-schemas.js";

const isActiveSchema = z.boolean();

const responseUserSchemas = z.object({
    id: idSchema,
    name: nameSchema,
    userName: userNameSchema,
    email: emailSchema,
    isActive: isActiveSchema,
    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema,
});

export default responseUserSchemas;