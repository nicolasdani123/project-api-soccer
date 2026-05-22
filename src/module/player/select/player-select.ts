import type { Prisma } from "@prisma/client"


const playerSelect:Prisma.PlayerSelect= {
    id:true,
    name:true,
    age:true,
    nationality:true,
    overall:true,
    potential:true,
    height:true,
    weight:true,
    preferredFoot:true,
    position:true,
    teamId:true,
    createdAt:true,
    updatedAt:true

}
export default playerSelect