import http from "http";
import url from "url";
import { REQUEST_TYPE } from "../types/types";
import { getUsers } from "../services/db.service";

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
      let users = await getUsers();
      response.statusCode = 200;
      response.end(JSON.stringify(users));
    }
  }
}
