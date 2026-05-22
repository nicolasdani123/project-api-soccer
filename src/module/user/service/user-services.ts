import type { Prisma } from "@prisma/client";
import type { idDTO } from "../../player/dto/player-dto.js";
import type { createUserDto, responseUserDto } from "../dto/user-dto.js";
import type UserRepository from "../repository/user-repository.js";
import responseUserSchemas from "../schemas/response-user.schemas.js";
import { generateHash } from "../utils/create-hash.js";

class UserService {
   
    constructor(private  readonly repository:UserRepository) {}
  

    async findAll():Promise<responseUserDto[]>{

        const users = await this.repository.findAll()

        return responseUserSchemas.array().parse(users)
    }
 

    async findById(id:idDTO):Promise<responseUserDto>{
        
        const users = await this.repository.findById(id)

        return responseUserSchemas.parse(users)
    }


    async create(data:createUserDto):Promise<responseUserDto>{
             
        const {password,...rest} = data
        
        const hash =  await generateHash(password)
        const dataParsed:Prisma.UserCreateInput = {
            ...rest,
            password_hash:hash

        }
        const user = await this.repository.create(dataParsed)


        return responseUserSchemas.parse(user)
    }
}

export default UserService