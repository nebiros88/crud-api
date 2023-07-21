import http from "http";
import url from "url";

import { REQUEST_TYPE, User } from "../types/types";
import { getUsers, createUser } from "../services/db.service";
import { isUser } from "../utils/utils";

const REQUEST: REQUEST_TYPE = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  DELETE: "DELETE",
};

export async function controller(request: http.IncomingMessage, response: http.ServerResponse): Promise<void> {
  const { method, url: requestUrl } = request;
  const parsedUrl = url.parse(requestUrl as string, true);
  const path = parsedUrl.pathname;
  if (path === "/api/users") {
    if (method === REQUEST.GET) {
      let users = getUsers();
      response.statusCode = 200;
      response.end(JSON.stringify(users));
    }
    if (method === REQUEST.POST) {
      let body = "";
      request.on("data", (chunk) => {
        body += chunk;
      });
      request.on("end", async () => {
        const user: User = JSON.parse(body);
        if (!isUser(user)) {
          response.statusCode = 400;
          response.end("Body does not contain required fields");
        } else {
          await createUser(user);
          response.statusCode = 201;
          response.end("Record created");
        }
      });
    }
  } else {
    response.statusCode = 404;
    response.end("You try to make request to non-existing endpoints");
  }
}
