import bcrypt from "bcrypt";
export async function compareHash(password, hash) {
    return bcrypt.compare(password, hash);
}
//# sourceMappingURL=compare-hash.js.map