import z from "zod";
import { nameSchema, userNameSchema, emailSchema, passwordSchema } from "./fields-user-schemas.js";

const createUserSchemas = z.object({
    name: nameSchema,
    userName: userNameSchema,
    email: emailSchema,
    password: passwordSchema,
});

export default createUserSchemas;