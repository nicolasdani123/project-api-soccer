import bcrypt from "bcrypt";

export async function generateHash(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function compareHash(
  password: string,
  hash: string,
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
