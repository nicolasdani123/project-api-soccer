import type { Prisma } from "@prisma/client";

export const userSelect: Prisma.UserSelect = {
  id: true,
  name: true,
  userName: true,
  email: true,
  isActive: true,
  createdAt: true,
  updatedAt: true,
};

export default userSelect;
