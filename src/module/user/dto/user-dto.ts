import z from "zod";
import createUserSchemas from "../schemas/create-user.schemas.js";
import type updateUserSchemas from "../schemas/update-user.schemas.js";
import type responseUserSchemas from "../schemas/response-user.schemas.js";

type createUserDto = z.infer<typeof createUserSchemas>
type updateUserDto = z.infer<typeof updateUserSchemas>
type responseUserDto = z.infer<typeof responseUserSchemas>

export type {createUserDto,updateUserDto,responseUserDto}