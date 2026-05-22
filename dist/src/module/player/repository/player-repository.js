import prisma from "../../../core/database/prisma/client.js";
import playerSelect from "../select/player-select.js";
class playerRespository {
    async findAll() {
        return prisma.player.findMany({
            where: { isActive: true },
            orderBy: { createdAt: "desc" },
            select: playerSelect,
        });
    }
    async findById(id) {
        return prisma.player.findUnique({
            where: { id, isActive: true },
            select: playerSelect
        });
    }
    async create(data) {
        return prisma.player.create({
            data,
            select: playerSelect
        });
    }
}
export default playerRespository;
//# sourceMappingURL=player-repository.js.map