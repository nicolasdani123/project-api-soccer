import { describe, expect, it } from "vitest";
import { buildSuccessResponse } from "@/shared/utils/response.js";

describe("buildSuccessResponse", () => {
  it("should return a standard success envelope", () => {
    const response = buildSuccessResponse({
      data: { id: 1, name: "test" },
      message: "Operação realizada",
      code: 201,
    });

    expect(response).toEqual({
      success: true,
      message: "Operação realizada",
      code: 201,
      timestamp: expect.any(String),
      data: { id: 1, name: "test" },
      errors: [],
    });
  });
});
