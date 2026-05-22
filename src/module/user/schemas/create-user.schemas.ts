import z from "zod";
import { name,userName,email, password } from "./fields-user-schemas.js";
const createUserSchemas = z.object({
    name,
    userName,
    email,
    password
})

export default createUserSchemas