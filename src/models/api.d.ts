declare interface SuccessfulResponse<T> {
  status: "success";
  statusCode: number;
  data: T;
}

declare interface ErrorResponse {
  status: "fail" | "error";
  statusCode: number;
  message: string;
}

declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;
