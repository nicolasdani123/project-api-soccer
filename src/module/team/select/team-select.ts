import type { Prisma } from "@prisma/client";

export const teamSelect:Prisma.TeamSelect = {
  id: true,
  name: true,
  shortName: true,
  country: true,
  city: true,
  league: true,
  stadium: true,
  foundedYear: true,
  logoUrl: true,
  isActive: true,
  createdAt: true,
  updatedAt: true,
};

export default teamSelect;
