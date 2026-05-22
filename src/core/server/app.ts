import express from "express"
import cors from "cors"
import morgan from "morgan"
import router from "@/router/global-router.js"

//inicio o servidor
const app = express()

//permito que outros dominos consigam acessa a api
app.use(cors())
app.use(express.json())
app.use(router)

// converto os dados enviandos para o body da requisição em objeto
app.use(morgan("dev"))

export default app