import createTeamSchema from "./create-team.schemas.js";
const updateTeamSchema = createTeamSchema.partial();

export default updateTeamSchema
