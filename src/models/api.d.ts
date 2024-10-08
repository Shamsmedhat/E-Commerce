declare interface SuccessfulResponse<T> {
  status: "success";
  data: T;
}

declare interface ErrorResponse {
  status: "fail" | "error";
  message: string;
}

declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;
