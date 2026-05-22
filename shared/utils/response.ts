export type SuccessResponse<T> = {
    success: true;
    message: string;
    code: number;
    timestamp: string;
    data: T;
    errors: [];
};

export const buildSuccessResponse = <T>(payload: {
    data: T;
    message?: string;
    code?: number;
}): SuccessResponse<T> => ({
    success: true,
    message: payload.message ?? "Requisição bem sucedida",
    code: payload.code ?? 200,
    timestamp: new Date().toISOString(),
    data: payload.data,
    errors: [],
});
