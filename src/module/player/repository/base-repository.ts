import type { idDTO } from "../dto/player-dto.js";

class BaseRepository<T, SelectType> {
  protected read(model: any, select: SelectType): Promise<T[]> {
    return model.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "desc" },
      select,
    });
  }

  protected readForId(model: any, id: idDTO, select: SelectType): Promise<T | null> {
    return model.findUnique({
      where: { id },
      select,
    });
  }

  protected async delete(model: any, id: idDTO): Promise<void> {
    await model.delete({
      where: { id },
    });
  }

  protected async softDelete(model: any, id: idDTO): Promise<void> {
    await model.update({
      where: { id },
      data: { isActive: false },
    });
  }
}
export default BaseRepository;
