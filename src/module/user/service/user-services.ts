import type { Prisma } from "@prisma/client";
import type { idDTO } from "../../player/dto/player-dto.js";
import type { createUserDto, responseUserDto, updateUserDto } from "../dto/user-dto.js";
import type UserRepository from "../repository/user-repository.js";
import responseUserSchemas from "../schemas/response-user.schemas.js";
import { generateHash } from "../utils/create-hash.js";

class UserService {

    constructor(private readonly repository: UserRepository) { }


    async findAll(): Promise<responseUserDto[]> {

        const users = await this.repository.findAll()

        return responseUserSchemas.array().parse(users)
    }


    async findById(id: idDTO): Promise<responseUserDto> {

        const users = await this.repository.findById(id)

        return responseUserSchemas.parse(users)
    }


    async findByEmail(email: any): Promise<responseUserDto> {


        const user = await this.repository.findByEmail(email)
        if (!user) throw new Error("Email não encontrado")

        return responseUserSchemas.parse(user)
    }

    async create(data: createUserDto): Promise<responseUserDto> {

        const { password, ...rest } = data

        const hash = await generateHash(password)
        const dataParsed: Prisma.UserCreateInput = {
            ...rest,
            password_hash: hash

        }
        const user = await this.repository.create(dataParsed)


        return responseUserSchemas.parse(user)
    }


    async update(id: idDTO, data: updateUserDto): Promise<responseUserDto> {

        await this.repository.findById(id)

        const filteredData: Prisma.UserUpdateInput = Object.fromEntries(Object.entries(data).
            filter(([_, value]) => value !== undefined),

        );

        const user = await this.repository.update(id, filteredData)

        return responseUserSchemas.parse(user)

    }
    async deactivate(id: idDTO): Promise<void> {
        await this.findById(id)
        await this.repository.deactivate(id)

    }
    async delete(id: idDTO): Promise<void> {
        await this.findById(id)
        await this.repository.delete(id)
    }
}

export default UserService