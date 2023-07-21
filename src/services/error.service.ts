import http from "http";
import { CustomError } from "../types/types";

export function handleError(response: http.ServerResponse, error: CustomError | Error): void {
  if (error instanceof Error) {
    response.statusCode = 500;
    response.end("Server error!");
  }
}
