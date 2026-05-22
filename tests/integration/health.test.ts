import { describe, expect, it } from "vitest";
import express from "express";
import request from "supertest";
import asyncHandler from "@/middlewares/async-handler.js";
import { buildSuccessResponse } from "@/shared/utils/response.js";

describe("integration /health", () => {
  it("should return a success envelope from an express route", async () => {
    const app = express();
    app.get(
      "/health",
      asyncHandler(async (_req, res) => {
        res.status(200).json(
          buildSuccessResponse({
            data: { healthy: true },
            message: "Health OK",
          }),
        );
      }),
    );

    const response = await request(app).get("/health");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      message: "Health OK",
      code: 200,
      timestamp: expect.any(String),
      data: { healthy: true },
      errors: [],
    });
  });
});
