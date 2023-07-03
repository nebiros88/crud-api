import http from "http";
import "dotenv/config";

import { controller } from "../controller/controller";
import { handleError } from "../services/error.service";

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (request: http.IncomingMessage, response: http.ServerResponse) => {
  response.setHeader("Content-Type", "application/json");
  try {
    return await controller(request, response);
  } catch (error: any) {
    handleError(response, error);
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});

export default server;
