declare class AppError extends Error {
    readonly statusCode: number;
    constructor(message: string, statusCode?: number);
}
export default AppError;
//# sourceMappingURL=appError.d.ts.map