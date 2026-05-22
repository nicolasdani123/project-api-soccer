import dotenv from "dotenv"
dotenv.config()

const env = {
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    DIRECT_URL: process.env.DIRECT_URL,
    JWT_SECRET: process.env.JWT_SECRET
}

if (!env.DATABASE_URL) {
    console.warn("DATABASE_URL não definido")
}

export default env