import type { Prisma } from "@prisma/client";
import prisma from "../../../core/database/prisma/client.js";
import type { idDTO } from "../../player/dto/player-dto.js";
import BaseRepository from "../../player/repository/base-repository.js";
import type { createUserDto, responseUserDto } from "../dto/user-dto.js";
import type responseUserSchemas from "../schemas/response-user.schemas.js";
import userSelect from "../select/user-select.js";

class UserRepository extends BaseRepository<responseUserDto,typeof userSelect> {



    async findAll():Promise<responseUserDto[]>{

       return  this.read(prisma.user,userSelect)

    }
  

    async  findById(id:idDTO):Promise<responseUserDto | null>{

        return this.readForId(prisma.user,id,userSelect)
    }


    async create(data:Prisma.UserCreateInput):Promise<responseUserDto>{

        return await prisma.user.create({
            data,
            select:userSelect
        })
    }
    
}
export default UserRepository