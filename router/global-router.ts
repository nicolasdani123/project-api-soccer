import { Router } from "express";
import playerRoutes from "@/src/module/player/router/player-router.js";
import teamsRouter from "@/src/module/team/router/router-team.js";
import userRouter from "@/src/module/user/router/user-router.js";
const router = Router()


router.use("/player",playerRoutes)
router.use("/teams",teamsRouter)
router.use("/user",userRouter)
export default router