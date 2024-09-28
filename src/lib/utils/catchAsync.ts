import { redirect } from "@/navigarion";
export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.name = "AppError";
  }
}
/**
 * Wraps an asynchronous function and catches any errors it throws, returning a standardized error response.
 *
 * @template T - The parameter types of the async function.
 * @template R - The return type of the async function.
 * @param {(...params: T) => Promise<R>} asyncFunction - The asynchronous function to wrap.
 * @returns {(...params: T) => Promise<R | ErrorResponse>} A function that calls the async function and catches errors.
 */
export default function catchAsync<T extends any[], R>(
  asyncFunction: (...params: T) => Promise<R>,
) {
  return async (...params: T) => {
    try {
      return await asyncFunction(...params);
    } catch (err: any) {
      let error: AppError;

      // Check if the error is an instance of AppError
      if (err instanceof AppError) {
        error = err;
      } else {
        // If it's a generic error, wrap it in AppError
        error = new AppError(
          err.message || "Server error",
          err.statusCode || 500,
        );
      }

      // Rethrow any other error as AppError
      return error;
    }
  };
}
