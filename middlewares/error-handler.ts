import { type ErrorRequestHandler, type Response } from "express";
import { ZodError } from "zod";
import { Prisma } from "@prisma/client";
import AppError from "../shared/error/appError.js";

type ErrorResponse = {
  success?: boolean;
  message?: string;
  errors?: any[];
  code?: number;
  timestamp?: string;
};

const buildErrorResponse = (overrides: ErrorResponse = {}) => ({
  success: false,
  message: "Erro interno no servidor",
  errors: [],
  code: 500,
  timestamp: new Date().toISOString(),
  ...overrides,
});

const handleZodError = (error: ZodError, res: Response) => {
  return res.status(400).json(
    buildErrorResponse({
      message: "Dados inválidos",
      code: 400,
      errors: error.issues.map((i) => ({
        field: i.path.join("."),
        message: i.message,
      })),
    }),
  );
};

const handlePrismaError = (error: Prisma.PrismaClientKnownRequestError,res: Response,): Response | null => {
  const map: Record<string, { status: number; message: string }> = {
    P2002: { status: 409, message: "Dado já existente" },
    P2003: { status: 400, message: "Violação de integridade referencial" },
    P2025: { status: 404, message: "Registro não encontrado" },
  };

  const mapped = map[error.code];

  if (!mapped) return null;

  return res.status(mapped.status).json(
    buildErrorResponse({
      message: mapped.message,
      code: mapped.status,
    }),
  );
};

const errorHandle: ErrorRequestHandler = (error, req, res, next) => {
  console.error("[ERROR]", {
    name: error?.name,
    message: error?.message,
  });

  if (error instanceof ZodError) {
    return handleZodError(error, res);
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    const handled = handlePrismaError(error, res);
    if (handled) return;
  }

  if (error instanceof AppError) {
    return res.status(error.statusCode).json(
      buildErrorResponse({
        message: error.message,
        code: error.statusCode,
      }),
    );
  }

  return res.status(500).json(buildErrorResponse());
};

export default errorHandle;
