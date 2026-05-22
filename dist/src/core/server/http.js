import app from "./app.js";
import env from "../env/env.js";
const startServer = () => {
    app.listen(env.PORT, () => {
        console.log(`Server running on port ${env.PORT}`);
    });
};
export default startServer;
//# sourceMappingURL=http.js.map