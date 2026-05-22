import { idSchema } from "../../player/schemas/player-fields-schema.js";
import createUserSchemas from "../schemas/create-user.schemas.js";
import type UserService from "../service/user-services.js";
import type { Request, Response } from "express";
class userController {
  constructor(private readonly service: UserService) {}

  async findAll(req: Request, res: Response): Promise<void> {
    const users = await this.service.findAll()

    res.status(200).json(users);
  }

  async findById(req:Request,res:Response):Promise<void>{
    
 const id = req.params.id

 const idParsed = idSchema.parse(id)

 const user = await this.service.findById(idParsed)
 res.status(200).json(user)
  }

  async create(req:Request,res:Response):Promise<void>{

    const body = req.body

    const bodyParsed=  createUserSchemas.parse(body)

    const user = await this.service.create(bodyParsed)

    res.status(201).json(user)
  }
}

export default userController;
