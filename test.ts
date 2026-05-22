import prisma from "./src/core/database/prisma/client";

async function main() {
  const result = await prisma.$queryRaw`SELECT 1`;
  console.log(result);
}

main().catch(e => console.error(e));
