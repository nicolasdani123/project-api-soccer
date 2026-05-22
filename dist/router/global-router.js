import { Router } from "express";
import playerRoutes from "../src/module/player/router/player-router.js";
const router = Router();
router.use("/player", playerRoutes);
export default router;
//# sourceMappingURL=global-router.js.map