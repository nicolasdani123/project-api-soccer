import { idSchema, emailSchema } from "../schemas/fields-user-schemas.js";
import createUserSchemas from "../schemas/create-user.schemas.js";
import updateUserSchemas from "../schemas/update-user.schemas.js";
import type UserService from "../service/user-services.js";
import type { Request, Response } from "express";
import { MESSAGES } from "@/shared/constants/messages.js";
import { buildSuccessResponse } from "@/shared/utils/response.js";
class UserController {
  constructor(private readonly service: UserService) { }

  async findAll(req: Request, res: Response): Promise<void> {
    const users = await this.service.findAll();

    res.status(200).json(
      buildSuccessResponse({
        data: users,
        message: MESSAGES.USER.LISTED,
      }),
    );
  }

  async findById(req: Request, res: Response): Promise<void> {
    const id = req.params.id;

    const idParsed = idSchema.parse(id);

    const user = await this.service.findById(idParsed);
    res.status(200).json(
      buildSuccessResponse({
        data: user,
        message: MESSAGES.USER.FOUND,
      }),
    );
  }

  async findByEmail(req: Request, res: Response): Promise<void> {
    const email = String(req.query.email ?? "");

    const emailParsed = emailSchema.parse(email);

    const user = await this.service.findByEmail(emailParsed);

    res.status(200).json(
      buildSuccessResponse({
        data: user,
        message: MESSAGES.USER.FOUND,
      }),
    );
  }
  async create(req: Request, res: Response): Promise<void> {
    const body = req.body;

    const bodyParsed = createUserSchemas.parse(body);

    const user = await this.service.create(bodyParsed);

    res.status(201).json(
      buildSuccessResponse({
        data: user,
        message: MESSAGES.USER.CREATED,
        code: 201,
      }),
    );
  }

  async update(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const body = req.body;
    const idParsed = idSchema.parse(id);
    const bodyParsed = updateUserSchemas.parse(body);

    const user = await this.service.update(idParsed, bodyParsed);

    res.status(200).json(
      buildSuccessResponse({
        data: user,
        message: MESSAGES.USER.UPDATED,
      }),
    );
  }
  async deactivate(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const idParsed = idSchema.parse(id);

    await this.service.deactivate(idParsed);
    res.status(204).send();
  }
  async delete(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const idparsed = idSchema.parse(id);

    await this.service.delete(idparsed);

    res.status(204).send();
  }
}
export default UserController;
