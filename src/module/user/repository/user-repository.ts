import type { Prisma } from "@prisma/client";
import prisma from "../../../core/database/prisma/client.js";
import type { idDTO } from "../../player/dto/player-dto.js";
import BaseRepository from "../../player/repository/base-repository.js";
import type { responseUserDto } from "../dto/user-dto.js";

import userSelect from "../select/user-select.js";

class UserRepository extends BaseRepository<responseUserDto, typeof userSelect> {



    async findAll(): Promise<responseUserDto[]> {

        return this.read(prisma.user, userSelect)

    }


    async findById(id: idDTO): Promise<responseUserDto | null> {

        return this.readForId(prisma.user, id, userSelect)
    }


     async  findByEmail(email:any):Promise<responseUserDto | null>{

        return prisma.user.findUnique({
            where:{email,isActive:true},
            
            select:userSelect
        })
     }

    async create(data: Prisma.UserCreateInput): Promise<responseUserDto> {

        return await prisma.user.create({
            data,
            select: userSelect
        })
    }

    async update(id: idDTO, data: Prisma.UserUpdateInput): Promise<responseUserDto> {
        return await prisma.user.update({
            where: { id },
            data,
            select: userSelect
        })
    }

    async deactivate(id: idDTO): Promise<void> {
        await this.softDelete(prisma.user, id)
    }

    async delete(id: idDTO): Promise<void> {
        await super.delete(prisma.user, id)
    }

}
export default UserRepository